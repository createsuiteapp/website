import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: { owner: "createsuiteapp", name: "website" },
  },
  ui: {
    brand: { name: "CreateSuite" },
  },
  collections: {
    blog: collection({
      label: "Blog",
      slugField: "title",
      path: "src/content/blog/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Título" } }),
        description: fields.text({ label: "Descrição", multiline: true }),
        publishedAt: fields.date({ label: "Data de publicação" }),
        author: fields.text({ label: "Autor" }),
        coverImage: fields.image({
          label: "Imagem de capa",
          directory: "public/images/blog",
          publicPath: "/images/blog/",
        }),
        draft: fields.checkbox({ label: "Rascunho", defaultValue: false }),
        content: fields.mdx({ label: "Conteúdo" }),
      },
    }),
    marketingPages: collection({
      label: "Páginas de Marketing",
      slugField: "title",
      path: "src/content/marketing/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Título" } }),
        description: fields.text({ label: "Descrição", multiline: true }),
        content: fields.mdx({ label: "Conteúdo" }),
      },
    }),
  },
  singletons: {
    siteSettings: singleton({
      label: "Configurações do Site",
      path: "src/content/settings/site",
      schema: {
        siteName: fields.text({ label: "Nome do site", defaultValue: "CreateSuite" }),
        siteDescription: fields.text({
          label: "Descrição padrão",
          multiline: true,
        }),
        twitterHandle: fields.text({ label: "Twitter/X handle" }),
        linkedinUrl: fields.url({ label: "LinkedIn URL" }),
      },
    }),
  },
});
