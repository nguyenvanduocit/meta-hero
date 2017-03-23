<template>
  <div id="app">
    <site-header></site-header>
    <div class="container">
      <main>
        <div class="row">
          <div class="gr-12 gr-4@lg gr-4@xl">
            <editor :groups="groups"></editor>
          </div>
          <div class="gr-12 gr-8@lg gr-8@xl">
            <div class="preview-pin"></div>
            <preview :code="code"></preview>
          </div>
        </div>
      </main>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script>
import editor from '@/components/editor'
import preview from './components/preview'
import siteHeader from './components/site-header'
import siteFooter from './components/site-footer'
import './styles/app.scss'
import Tether from 'tether'

export default {
  name: 'app',
  components: {
    editor,
    preview,
    siteHeader,
    siteFooter
  },
  mounted () {
    /* eslint-disable no-new */
    new Tether({
      element: this.$el,
      target: '.preview-pin',
      attachment: 'top left',
      targetAttachment: 'top left',
      constraints: [
        {
          to: 'window',
          pin: true
        }
      ]
    })
  },
  data () {
    return {
      groups: {
        type: {
          title: 'Type',
          fields: {
            type: {
              label: 'What kind of your website?',
              type: 'radio',
              value: 'website',
              options: [
                {
                  label: 'General Website',
                  value: 'website'
                },
                {
                  label: 'Mobile App (iOS & Android)',
                  value: 'app'
                },
                {
                  label: 'Article',
                  value: 'article'
                },
                {
                  label: 'Video',
                  value: 'video'
                },
                {
                  label: 'Product (e-commerce)',
                  value: 'product'
                }
              ]
            }
          }
        },
        general: {
          title: 'General',
          fields: {
            title: {
              label: 'Page title',
              type: 'text',
              description: 'The SEO title of your website.',
              value: '',
              code: '<title>{{VALUE}}</title>'
            },
            description: {
              label: 'Page description',
              type: 'text',
              line: 3,
              description: 'The SEO title of your website.',
              value: '',
              code: '<meta name="description" content="{{VALUE}}">'
            },
            author: {
              label: 'Author',
              type: 'text',
              description: 'The author of website',
              value: '',
              code: '<meta name="author" content="{{VALUE}}">'
            },
            language: {
              label: 'Language',
              type: 'text',
              description: 'The author of website',
              value: '',
              code: '<meta name="language" content="{{VALUE}}">'
            },
            favicon: {
              label: 'favicon',
              type: 'text',
              description: 'The author of website',
              value: '',
              code: '<link href="{{VALUE}}" rel="shortcut icon" type="image/x-icon">'
            }
          }
        },
        facebook: {
          title: 'facebook',
          fields: {
            type: {
              type: 'hidden',
              value: () => this.groups.type.fields.type.value,
              code: '<meta property="og:type" content="{{VALUE}}">'
            },
            url: {
              label: 'URL',
              type: 'text',
              value: '',
              code: '<meta property="og:url" content="{{VALUE}}">'
            },
            image: {
              label: 'Image URL',
              type: 'text',
              value: '',
              code: '<meta property="og:image" content="{{VALUE}}">'
            },
            description: {
              label: 'Description',
              type: 'text',
              line: 3,
              value: '',
              code: '<meta property="og:description" content="{{VALUE}}">'
            },
            app_id: {
              label: 'App ID',
              type: 'text',
              value: '',
              code: '<meta property="og:app_id" content="{{VALUE}}">'
            },
            locale: {
              label: 'Locale',
              type: 'text',
              value: '',
              code: '<meta property="og:locale" content="{{VALUE}}">'
            },
            video: {
              label: 'video',
              type: 'text',
              value: '',
              code: '<meta property="og:video" content="{{VALUE}}">',
              condition: () => this.groups.type.fields.type.value === 'video'
            }
          }
        },
        twitter: {
          title: 'Twitter',
          fields: {
            type: {
              label: 'Card type',
              type: 'hidden',
              code: '<meta name="twitter:site" content="{{VALUE}}">',
              value: () => {
                switch (this.groups.type.fields.type.value) {
                  case 'app':
                    return 'app'
                  case 'video':
                    return 'player'
                  default:
                    return 'summary_large_image'
                }
              }
            },
            site: {
              label: 'Site',
              type: 'text',
              value: '',
              code: '<meta name="twitter:site" content="@{{VALUE}}">'
            },
            title: {
              label: 'Title',
              type: 'text',
              value: '',
              code: '<meta name="twitter:title" content="{{VALUE}}">'
            },
            description: {
              label: 'Description',
              type: 'text',
              line: 3,
              value: '',
              code: '<meta name="twitter:description" content="{{VALUE}}">'
            },
            creator: {
              label: 'creator',
              type: 'text',
              value: '',
              code: '<meta name="twitter:creator" content="@{{VALUE}}">'
            },
            image: {
              label: 'Image',
              type: 'text',
              value: '',
              code: '<meta name="twitter:image" content="{{VALUE}}">',
              condition: () => this.groups.twitter.fields.type.value() !== 'summary'
            },
            playerUrl: {
              label: 'Player URL',
              type: 'text',
              value: '',
              code: '<meta name="twitter:image" content="{{VALUE}}">',
              condition: () => this.groups.twitter.fields.type.value() === 'player'
            },
            appCountry: {
              label: 'App country',
              type: 'text',
              value: '',
              code: '<meta name="twitter:app:country" content="{{VALUE}}">',
              condition: () => this.groups.twitter.fields.type.value() === 'app'
            },
            appNameAppStore: {
              label: 'App name',
              type: 'text',
              value: '',
              code: '<meta name="twitter:app:name:iphone" content="{{VALUE}}">\n<meta name="twitter:app:name:ipad" content="{{VALUE}}">\n<meta name="twitter:app:name:googleplay" content="{{VALUE}}">',
              condition: () => this.groups.twitter.fields.type.value() === 'app'
            },
            appIdAppStore: {
              label: 'App ID (App Store)',
              type: 'text',
              value: '',
              code: '<meta name="twitter:app:id:iphone" content="{{VALUE}}">\n<meta name="twitter:app:id:ipad" content="{{VALUE}}">',
              condition: () => this.groups.twitter.fields.type.value() === 'app'
            },
            appUrlAppStore: {
              label: 'App URL(App Store)',
              type: 'text',
              value: '',
              code: '<meta name="twitter:app:url:iphone" content="{{VALUE}}">\n<meta name="twitter:app:url:ipad" content="{{VALUE}}">',
              condition: () => this.groups.twitter.fields.type.value() === 'app'
            },
            appIdPlayStore: {
              label: 'App ID (Play Store)',
              type: 'text',
              value: '',
              code: '<meta name="twitter:app:id:googleplay" content="{{VALUE}}">',
              condition: () => this.groups.twitter.fields.type.value() === 'app'
            },
            appUrlPlayStore: {
              label: 'App URL(Play Store)',
              type: 'text',
              value: '',
              code: '<meta name="twitter:app:url:googleplay" content="{{VALUE}}">',
              condition: () => this.groups.twitter.fields.type.value() === 'app'
            }
          }
        }
      }
    }
  },
  computed: {
    code () {
      let replaceRegex = /{{VALUE}}/g
      let code = '<meta charset="utf-8">\n<meta name=viewport content="width=device-width,initial-scale=1,minimum-scale=1">\n'
      for (const group in this.groups) {
        if (!this.groups[group].condition || (this.groups[group].condition && this.groups[group].condition())) {
          for (const field in this.groups[group].fields) {
            if (this.groups[group].fields[field].value && this.groups[group].fields[field].code && (!this.groups[group].fields[field].condition || (this.groups[group].fields[field].condition && this.groups[group].fields[field].condition()))) {
              let value = ''
              if (typeof this.groups[group].fields[field].value === 'function') {
                value = this.groups[group].fields[field].value()
              } else {
                value = this.groups[group].fields[field].value
              }
              code = code + this.groups[group].fields[field].code.replace(replaceRegex, value) + '\n'
            }
          }
        }
      }
      return code
    }
  }
}
</script>
