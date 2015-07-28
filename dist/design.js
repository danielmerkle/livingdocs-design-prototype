(function () { var designJSON = {
  "name": "boilerplate",
  "label": "Boilerplate",
  "version": "0.3.0",
  "author": "upfront.io",
  "assets": {
    "css": [
      "./css/bootstrap.css",
      "./css/prototype.css"
    ]
  },
  "wrapper": "<div class='container doc-section'></div>",
  "componentProperties": {
    "well-large": {
      "label": "Large",
      "type": "option",
      "value": "well-lg"
    },
    "paragraph-cols": {
      "label": "Columns",
      "type": "select",
      "options": [
        {
          "caption": "Default"
        },
        {
          "caption": "1 Column",
          "value": "one-col"
        },
        {
          "caption": "2 Columns",
          "value": "two-cols"
        }
      ]
    },
    "panel-styles": {
      "label": "Panel Styles",
      "type": "select",
      "options": [
        {
          "caption": "Default"
        },
        {
          "caption": "Primary",
          "value": "panel-primary"
        },
        {
          "caption": "Success",
          "value": "panel-success"
        },
        {
          "caption": "Info",
          "value": "panel-info"
        },
        {
          "caption": "Warning",
          "value": "panel-warning"
        },
        {
          "caption": "Danger",
          "value": "panel-danger"
        }
      ]
    }
  },
  "groups": [
    {
      "label": "Headers",
      "components": [
        "header",
        "hero",
        "h1",
        "h2"
      ]
    },
    {
      "label": "Text",
      "components": [
        "p",
        "quote",
        "author"
      ]
    },
    {
      "label": "Images",
      "components": [
        "image"
      ]
    },
    {
      "label": "Embeds",
      "components": [
        "media"
      ]
    },
    {
      "label": "Lists",
      "components": [
        "list-group",
        "list-group-item",
        "list-group-box-item"
      ]
    },
    {
      "label": "Boxes",
      "components": [
        "panel",
        "well",
        "info",
        "separator"
      ]
    },
    {
      "label": "Grid",
      "components": [
        "main-and-sidebar"
      ]
    },
    {
      "label": "Teasers",
      "components": [
        "teaser"
      ]
    }
  ],
  "defaultComponents": {
    "paragraph": "p",
    "image": "image"
  },
  "defaultContent": [
    {
      "component": "header"
    },
    {
      "component": "p"
    }
  ],
  "prefilledComponents": {},
  "metadata": [
    {
      "identifier": "title",
      "type": "text",
      "matches": [
        "header.title",
        "hero.title",
        "h1.title",
        "h2.title"
      ]
    },
    {
      "identifier": "description",
      "type": "text",
      "matches": [
        "p.text"
      ]
    }
  ],
  "components": [
    {
      "name": "info",
      "html": "<div class=\"info right info-default\">\n  <div class=\"info-heading\">\n    <h3 class=\"info-title\" doc-editable=\"title\">Wichtige Info!</h3>\n  </div>\n  <div class=\"info-body\">\n   <img doc-image=\"image\">\n   <p class=\"info-img-legend\" doc-editable=\"legend\">Ich bin die Bildlegende</p>\n   <p class=\"info-body-text\" doc-editable=\"body\">Hier kommt der Bodytext</p>\n  </div>\n</div>",
      "label": "Infobox"
    },
    {
      "name": "panel",
      "html": "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\" doc-editable=\"title\">Panel Title</h3>\n  </div>\n  <div class=\"panel-body\" doc-editable=\"body\">\n    Panel content\n  </div>\n</div>",
      "label": "Panel",
      "properties": [
        "panel-styles"
      ]
    },
    {
      "name": "separator",
      "html": "<hr class=\"separator\">",
      "label": "Separator"
    },
    {
      "name": "media",
      "html": "<div class=\"embed-responsive embed-responsive-16by9\" doc-html=\"iframe\"></div>",
      "label": "Media"
    },
    {
      "name": "well",
      "html": "<div class=\"well\">\n  Look, I&apos;m in a well!\n</div>",
      "label": "Well",
      "properties": [
        "well-large"
      ]
    },
    {
      "name": "h1",
      "html": "<h1 class=\"title\" doc-editable=\"title\">\n  Title\n</h1>",
      "label": "Title H1"
    },
    {
      "name": "hero",
      "html": "<div class=\"hero\" doc-image=\"src\">\n  <h1 doc-editable=\"title\">Hello, world!</h1>\n  <p class=\"lead\" doc-editable=\"text\">\n    This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.\n  </p>\n  <p class=\"author\">\n    Author:\n\t<span class=\"author-name\" doc-editable=\"author\">Vorname Name\t</span>\n  </p>\n  \n  \n  <!--<p>\n    <a doc-link=\"featured-page\" doc-editable=\"button\" class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\n  </p>-->\n</div>",
      "label": "Hero Teaser"
    },
    {
      "name": "h2",
      "html": "<h2 class=\"title\" doc-editable=\"title\">\n  Title\n</h2>",
      "label": "Title H2"
    },
    {
      "name": "h3",
      "html": "<h3 class=\"title\" doc-editable=\"title\">\r\n  Title\r\n</h3>",
      "label": "Title H3"
    },
    {
      "name": "image",
      "html": "<div class=\"comp-image\">\n  <img doc-image=\"image\">\n  <figcaption doc-editable=\"caption\">\n    Image Caption.\n  </figcaption>\n  <figsource doc-editable=\"source\" doc-optional=\"source\">\n    Image Source.\n  </figsource>  \n</div>",
      "label": "Image"
    },
    {
      "name": "main-and-sidebar",
      "html": "<div class=\"row\">\n  <div class=\"col-md-8\" doc-container=\"main\"></div>\n  <div class=\"col-md-4\" doc-container=\"sidebar\"></div>\n</div>",
      "label": "Main and Sidebar"
    },
    {
      "name": "list-group-box-item",
      "html": "<li class=\"list-group-item\">\n  <h4 class=\"list-group-item-heading\" doc-editable=\"title\">List group item heading</h4>\n  <p class=\"list-group-item-text\" doc-editable=\"text\">\n    Donec id elit non mi porta gravida at eget metus.\n    Maecenas sed diam eget risus varius blandit.\n  </p>\n</li>",
      "label": "List Group Box Item",
      "allowedParents": [
        "list-group"
      ]
    },
    {
      "name": "header",
      "html": "<div class=\"page-header\">\n  <h1 doc-editable=\"title\">Example page header Subtext for header</h1>\n</div>",
      "label": "Header"
    },
    {
      "name": "list-group-item",
      "html": "<li class=\"list-group-item\" doc-editable=\"text\">Cras justo odio</li>",
      "label": "List Group Item",
      "allowedParents": [
        "list-group"
      ]
    },
    {
      "name": "teaser",
      "html": "<div class=\"thumbnail\">\n  <a doc-link=\"link\" href=\"#\">\n    <img doc-image=\"image\">\n    <div class=\"caption\">\n      <h3 doc-editable=\"label\">Label</h3>\n      <p doc-editable=\"description\">\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n      </p>\n    </div>\n  </a>\n</div>",
      "label": "Teaser"
    },
    {
      "name": "list-group",
      "html": "<ul class=\"list-group\" doc-container=\"list\"></ul>",
      "label": "List Group",
      "directives": {
        "list": {
          "allowedChildren": [
            "list-group-item",
            "list-group-box-item"
          ]
        }
      }
    },
    {
      "name": "author",
      "html": "<p class=\"comp-author\">\r\n<span doc-editable=\"text\" doc-optional=\"\" class=\"comp-author-bold\">Text:</span> <span doc-editable=\"comp-author\">Christian Jung</span>\r\n</p>",
      "label": "Author"
    },
    {
      "name": "p",
      "html": "<p class=\"dropcap\" doc-editable=\"text\">\n  Studio Ghibli, Inc. is a Japanese animation film studio based in Koganei, Tokyo, Japan. The studio is best known for its anime feature films. Studio Ghibli began in June 1985 after the success of Nausica&#xE4; of the Valley of the Wind with funding by Tokuma Shoten. The company&#x2019;s logo features the character Totoro (a large forest spirit) from Miyazaki&#x2019;s film My Neighbor Totoro. At one time the studio was based in Kichij&#x14D;ji, Musashino, Tokyo.\n</p>",
      "label": "Paragraph",
      "properties": [
        "paragraph-cols"
      ]
    },
    {
      "name": "quote",
      "html": "<blockquote class=\"full\">\n\t<p class=\"quote\" doc-editable=\"text\">\n\t\tWe depict hatred, but it is to depict that there are more important things. \n\t</p>\n\t<footer>\n\t<span doc-editable=\"author\">Hayao Miyazaki</span>\n\t</footer>\n</blockquote>",
      "label": "Quote"
    }
  ]
}; if(typeof module !== 'undefined' && module.exports) {return module.exports = designJSON;} else { this.design = this.design || {}; this.design.boilerplate = designJSON;} }).call(this);