# EditorJS Strapi Plugin

## When updating this code, remember:

1. Update version in package.json

2. build

```
yarn build
```

This will build the plugin and create a new dist folder.

3. It seems you have to delete the plugin from the strapi admin, and then re-add it.

## Good reads for the complications this plugin has faced:

Reason why its here, and not in the RB repo:  
(useStrapiApp)  
https://github.com/strapi/strapi/issues/22162

---

There has been an update for how plugins should fetch in strapi - it currently works without, but we should keep an eye on it:  
@AVM: I think the new pattern for authorized requests are:  
https://gitlab.peytz.dk/flex/red-barnet-dannelse/-/blob/main/cms/src/plugins/multi-domain/admin/src/api/permissions.ts#L6

## Custom tools for editor js:

// Created using this guide:
https://walkthrough.so/pblc/QCawSCKwOQLn/creating-a-custom-editorjs-block-tool-with-react?sn=4
