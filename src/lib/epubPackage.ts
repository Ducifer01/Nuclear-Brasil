import { zipSync, strToU8, type Zippable } from "fflate";
import { learnArticles } from "@/content/learn";
import { markdownToHtml } from "./markdownToHtml";

const CONTAINER_XML = `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`;

function articleXhtml(title: string, bodyHtml: string): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head><title>${title}</title></head>
<body>${bodyHtml}</body>
</html>`;
}

function contentOpf(manifestItems: string, spineItems: string, date: string): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" unique-identifier="BookId" version="2.0">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:title>Nuclear Survival — Manual completo</dc:title>
    <dc:creator>Nuclear Survival</dc:creator>
    <dc:identifier id="BookId">nuclear-survival-manual</dc:identifier>
    <dc:language>pt-BR</dc:language>
    <dc:date>${date}</dc:date>
  </metadata>
  <manifest>
    <item id="nav" href="nav.xhtml" media-type="application/xhtml+xml"/>
    ${manifestItems}
  </manifest>
  <spine>
    <itemref idref="nav"/>
    ${spineItems}
  </spine>
</package>`;
}

function navXhtml(items: { id: string; title: string }[]): string {
  const list = items.map((i) => `<li><a href="${i.id}.xhtml">${i.title}</a></li>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
<head><title>Sumário</title></head>
<body>
  <nav epub:type="toc"><h1>Nuclear Survival</h1><ol>${list}</ol></nav>
</body>
</html>`;
}

/** Monta um EPUB mínimo (mimetype + container + manifesto + um xhtml por artigo). */
export function buildEpub(): Uint8Array {
  const files: Zippable = {};

  // Regra do formato EPUB: mimetype vai sem compressão.
  files["mimetype"] = [strToU8("application/epub+zip"), { level: 0 }];
  files["META-INF/container.xml"] = strToU8(CONTAINER_XML);

  const navItems: { id: string; title: string }[] = [];
  const manifestItems: string[] = [];
  const spineItems: string[] = [];

  for (const a of learnArticles) {
    const bodyHtml = `<h1>${a.title}</h1>${markdownToHtml(a.body)}`;
    files[`OEBPS/${a.slug}.xhtml`] = strToU8(articleXhtml(a.title, bodyHtml));
    navItems.push({ id: a.slug, title: a.title });
    manifestItems.push(
      `<item id="${a.slug}" href="${a.slug}.xhtml" media-type="application/xhtml+xml"/>`
    );
    spineItems.push(`<itemref idref="${a.slug}"/>`);
  }

  files["OEBPS/nav.xhtml"] = strToU8(navXhtml(navItems));
  files["OEBPS/content.opf"] = strToU8(
    contentOpf(manifestItems.join("\n"), spineItems.join("\n"), new Date().toISOString().slice(0, 10))
  );

  return zipSync(files, { level: 6, mem: 8 });
}
