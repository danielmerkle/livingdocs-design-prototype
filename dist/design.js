(function () { var designJSON = {
  "name": "prototype",
  "label": "PROTOTYPE",
  "version": "0.1.0",
  "author": "nsgroup",
  "assets": {
    "css": [
      "./css/bootstrap.css",
      "./css/prototype.css"
    ]
  },
  "wrapper": "<div class='container'><div class='wrapper'><div id='detail' class='clearfix'><article class='article doc-section'></article></div></div></div>",
  "imageRatios": {
    "16:9": {
      "label": "16:9",
      "ratio": "16x9"
    },
    "1:1": {
      "label": "1:1",
      "ratio": "1x1"
    },
    "4:3": {
      "label": "4:3",
      "ratio": "4x3"
    },
    "3:4": {
      "label": "3:4",
      "ratio": "3x4"
    }
  },
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
          "caption": "1 Column"
        },
        {
          "caption": "2 Columns",
          "value": "two-cols"
        }
      ]
    },
    "quote-size": {
      "label": "Small",
      "type": "option",
      "value": "half"
    },
    "separator-size": {
      "label": "Big",
      "type": "option",
      "value": "big"
    },
    "dropcap": {
      "label": "Dropcap",
      "type": "option",
      "value": "dropcap"
    },
    "image-align": {
      "label": "Align",
      "type": "select",
      "options": [
        {
          "caption": "Left"
        },
        {
          "caption": "Right",
          "value": "right"
        },
        {
          "caption": "Middle",
          "value": "middle"
        },
        {
          "caption": "Full",
          "value": "full"
        }
      ]
    },
    "info-align": {
      "label": "Align",
      "type": "select",
      "options": [
        {
          "caption": "Left"
        },
        {
          "caption": "Right",
          "value": "right"
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
        "hero",
        "h1",
        "h2",
        "h3"
      ]
    },
    {
      "label": "Text",
      "components": [
        "p",
        "author",
        "lead",
        "quote"
      ]
    },
    {
      "label": "Images",
      "components": [
        "image",
        "6images"
      ]
    },
    {
      "label": "Gallery",
      "components": [
        "gallery",
        "image-slide"
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
        "separator",
        "panel",
        "well",
        "info"
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
      "component": "hero"
    },
    {
      "component": "lead"
    },
    {
      "component": "p"
    },
    {
      "component": "p"
    },
    {
      "component": "quote"
    },
    {
      "component": "p"
    },
    {
      "component": "separator"
    },
    {
      "component": "p"
    },
    {
      "component": "info"
    },
    {
      "component": "p"
    },
    {
      "component": "p"
    },
    {
      "component": "p"
    },
    {
      "component": "image"
    },
    {
      "component": "p"
    },
    {
      "component": "p"
    },
    {
      "component": "p"
    },
    {
      "component": "separator"
    }
  ],
  "prefilledComponents": {},
  "metadata": [
    {
      "identifier": "title",
      "type": "text",
      "matches": [
        "hero.title",
        "h1.title",
        "h2.title"
      ]
    },
    {
      "identifier": "title",
      "type": "text",
      "matches": [
        "header.title"
      ]
    }
  ],
  "components": [
    {
      "name": "info",
      "html": "<div class=\"info info-default\">\n  <div class=\"info-heading\">\n    <h3 class=\"info-title\" doc-editable=\"title\">Peugeot f&#xE4;hrt in die schwarzen Zahlen</h3>\n  </div>\n  <div class=\"info-body\">\n   <img doc-image=\"image\">\n   <p class=\"info-img-legend\" doc-editable=\"legend\">Peugeot f&#xE4;hrt wieder einen Gewinn ein: Produktionswerk in Poissy bei Paris.<br> (Bild: Benoit Tessier / Reuters)</p>\n   <p class=\"info-body-text\" doc-editable=\"body\">Peugeot hat in der ersten Jahresh&#xE4;lfte erstmals seit vier Jahren wieder einen Gewinn eingefahren. Damit ist der Konzern bei der Sanierung seinen selbstgesteckten Zielen voraus. Wie die Franzosen am Mittwoch mitteilten, sorgten der schwache Euro und gesunkene Rohwarenkosten f&#xFC;r R&#xFC;ckenwind. Allerdings werde das Gesch&#xE4;ftsumfeld rauer. In China rechnen die Franzosen nur noch mit einem Wachstum von 3%.</p>\n  </div>\n</div>",
      "label": "Infobox",
      "properties": [
        "info-align"
      ]
    },
    {
      "name": "media",
      "html": "<div class=\"embed-responsive embed-responsive-16by9\" doc-html=\"iframe\"></div>",
      "label": "Media"
    },
    {
      "name": "separator",
      "html": "<hr class=\"separator big\">",
      "label": "Separator",
      "properties": [
        "separator-size"
      ]
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
      "html": "<div class=\"h1-title\">\n\t<h1 class=\"title\" doc-editable=\"title\">\n\t\tTitle\n\t</h1>  \n\t<h2 class=\"subtitle\" doc-editable=\"subtitle\" doc-optional=\"subtitle\"> \n\t\tSubtitle-Text \n\t</h2>\n</div>",
      "label": "Title H1"
    },
    {
      "name": "main-and-sidebar",
      "html": "<div class=\"row\">\n  <div class=\"col-md-8\" doc-container=\"main\"></div>\n  <div class=\"col-md-4\" doc-container=\"sidebar\"></div>\n</div>",
      "label": "Main and Sidebar"
    },
    {
      "name": "h3",
      "html": "<h3 class=\"title\" doc-editable=\"title\">\r\n  Title\r\n</h3>",
      "label": "Title H3"
    },
    {
      "name": "6images",
      "html": "<figure class=\"aspect-ratio square\">\r\n\t<div style=\"\" data-doc-image=\"image1\" class=\"figure-container doc-image-empty\"></div>\r\n\t<figcaption spellcheck=\"false\" style=\"display: none;\" data-doc-placeholder=\"Caption\" class=\"doc-editable js-editable\" data-doc-editable=\"caption1\" contenteditable=\"true\">\r\n\t</figcaption>\r\n</figure>",
      "label": "6 Images"
    },
    {
      "name": "gallery",
      "html": "<div class=\"media-gallery\">\n  <h2 doc-editable=\"title\">Mediengalerie</h2>\n  <ul class=\"media-gallery-slides\" doc-container=\"slides\"></ul>\n</div>",
      "label": "Media Gallery",
      "directives": {
        "slides": {
          "allowedChildren": [
            "image-slide"
          ]
        }
      }
    },
    {
      "name": "hero",
      "html": "<div class=\"hero\" doc-image=\"src\">\n  <h1 doc-editable=\"title\">Hello, world!</h1>\n  <p class=\"lead\" doc-editable=\"text\">\n    This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.\n  </p>\n  <p class=\"author\">\n    Author:\n\t<span class=\"author-name\" doc-editable=\"author\">Vorname Name\t</span>\n  </p>\n  \n  \n  <!--<p>\n    <a doc-link=\"featured-page\" doc-editable=\"button\" class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\n  </p>-->\n</div>",
      "label": "Hero Title"
    },
    {
      "name": "image-slide",
      "html": "<li class=\"media-gallery-image-slide\">\n  <img doc-image=\"image\">\n  <p class=\"quellverweis\" doc-editable=\"source\" doc-optional=\"\">Quelle</p>\n  <p class=\"bildlegende\" doc-editable=\"caption\" doc-optional=\"\">Caption</p>\n</li>",
      "label": "Image Slide",
      "allowedParents": [
        "gallery"
      ],
      "directives": {
        "image": {
          "imageRatios": [
            "4:3",
            "3:4"
          ],
          "allowOriginalRatio": true
        }
      }
    },
    {
      "name": "image",
      "html": "<figure class=\"comp-image\">\n  <img doc-image=\"image\">\n  <figcaption doc-editable=\"caption\">\n    Image Caption.\n  </figcaption>\n  <div doc-editable=\"source\" doc-optional=\"source\">\n    Image Source.\n  </div>  \n</figure>",
      "label": "Image",
      "properties": [
        "image-align"
      ],
      "directives": {
        "image": {
          "imageRatios": [
            "16:9",
            "1:1"
          ],
          "allowOriginalRatio": true
        }
      }
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
      "name": "panel",
      "html": "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\" doc-editable=\"title\">Panel Title</h3>\n  </div>\n  <div class=\"panel-body\" doc-editable=\"body\">\n    Panel content\n  </div>\n</div>",
      "label": "Panel",
      "properties": [
        "panel-styles"
      ]
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
      "name": "author",
      "html": "<p class=\"comp-author\">\r\n<span doc-editable=\"text\" doc-optional=\"\" class=\"comp-author-bold\">Text:</span> <span doc-editable=\"comp-author\">Christian Jung</span>\r\n</p>",
      "label": "Author"
    },
    {
      "name": "h2",
      "html": "<h2 class=\"title\" doc-editable=\"title\">\n  Title\n</h2>",
      "label": "Title H2"
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
      "name": "p",
      "html": "<p class=\"\" doc-editable=\"text\">\n  Studio Ghibli, Inc. is a Japanese animation film studio based in Koganei, Tokyo, Japan. The studio is best known for its anime feature films. Studio Ghibli began in June 1985 after the success of Nausica&#xE4; of the Valley of the Wind with funding by Tokuma Shoten. The company&#x2019;s logo features the character Totoro (a large forest spirit) from Miyazaki&#x2019;s film My Neighbor Totoro. At one time the studio was based in Kichij&#x14D;ji, Musashino, Tokyo.\n</p>",
      "label": "Paragraph",
      "properties": [
        "paragraph-cols",
        "dropcap"
      ]
    },
    {
      "name": "quote",
      "html": "<blockquote class=\"\">\n\t<p class=\"quote\" doc-editable=\"text\">\n\t\tWe depict hatred, but it is to depict that there are more important things. \n\t</p>\n\t<footer>\n\t<span doc-editable=\"author\">Hayao Miyazaki</span>\n\t</footer>\n</blockquote>",
      "label": "Quote",
      "properties": [
        "quote-size"
      ]
    },
    {
      "name": "lead",
      "html": "<p class=\"lead\" doc-editable=\"text\">\n  Studio Ghibli, Inc. is a Japanese animation film studio based in Koganei, Tokyo, Japan. The studio is best known for its anime feature films. Studio Ghibli began in June 1985 after the success of Nausica&#xE4; of the Valley of the Wind with funding by Tokuma Shoten. The company&#x2019;s logo features the character Totoro (a large forest spirit) from Miyazaki&#x2019;s film My Neighbor Totoro. At one time the studio was based in Kichij&#x14D;ji, Musashino, Tokyo.\n</p>",
      "label": "Lead"
    }
  ]
}; if(typeof module !== 'undefined' && module.exports) {return module.exports = designJSON;} else { this.design = this.design || {}; this.design.prototype = designJSON;} }).call(this);