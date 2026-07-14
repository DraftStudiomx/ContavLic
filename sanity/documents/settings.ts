import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
    name: "settings",
    type: "document",
    title: "Settings",
    fieldsets: [
        {
            name: 'header',
            title: 'Header Settings',
            options: {
                collapsible: false,
                collapsed: false,
            },
        },
        {
            name: 'footer',
            title: 'Footer Settings',
            options: {
                collapsible: false,
                collapsed: false,
            },
        },
    ],
    fields: [
        defineField({
            name: "mail",
            title: "Contact Email",
            type: "string",
             validation: (Rule) => Rule.email().error('Please enter a valid email address.'),
        }),
        defineField({
            name: 'headerNavigation',
            title: 'Header Navigation',
            type: 'array',
            of: [
                {
					type: 'link',
				},
            ],
            options: {
                insertMenu: {
                  views: [
                    { name: 'list' },
                  ]
                }
            },
            fieldset: 'header',
        }),
        defineField({
            name: 'headerLogo',
            title: 'Header Image',
            type: 'image',
            fieldset: 'header',
        }),
        defineField({
            name: 'footerSitemap',
            title: 'Footer Sitemap',
            type: 'array',
            of: [
                {
					type: 'link',
				},
            ],
            options: {
                insertMenu: {
                  views: [
                    { name: 'list' },
                  ]
                }
            },
            fieldset: 'footer',
        }),
        defineField({
            name: 'footerSocial',
            title: 'Footer Social Links',
            type: 'array',
            of: [
                {
					type: 'link',
				},
            ],
            options: {
                insertMenu: {
                  views: [
                    { name: 'list' },
                  ]
                }
            },
            fieldset: 'footer',
        }),
        defineField({
            name: 'footerAddress',
            title: 'Footer Address',
            type: 'link',
            fieldset: 'footer',
        }),
        defineField({
            name: 'footerPhone',
            title: 'Footer Phone',
            type: 'string',
            fieldset: 'footer',
        }),
        defineField({
            name: 'footerEmail',
            title: 'Footer Email',
            type: 'string',
            fieldset: 'footer',
            validation: (Rule) => Rule.email().error('Please enter a valid email address.'),
        }),
        defineField({
            name: 'footerImage',
            title: 'Footer Image',
            type: 'image',
            fieldset: 'footer',
        }),
        
    ],
    preview: {
        prepare() {
            return {
                title: `Settings`,
            };
        },
    },
});