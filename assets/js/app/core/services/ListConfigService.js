/**
 * Simple service to return configuration for generic list. This service contains only
 * getter methods that all list views uses in Boilerplate frontend application.
 *
 * So generally you change these getter methods and changes are affected to all list
 * views on application.
 *
 * @todo text translations
 */
(function() {
  'use strict';

  angular.module('frontend.core.services')
    .factory('ListConfig', [
      '_',
      function factory(_) {
        /**
         * List title item configuration.
         *
         * @type  {{
         *          author: *[],
         *          book: *[]
         *        }}
         */
        var titleItems = {
          target: [
            {
              title: '',
              column : '',
              width : 1
            },
            {
              title: 'target',
              column: 'target',
              searchable: true,
              sortable: true,
              inSearch: true,
              inTitle: true
            },
            {
              title: 'weight',
              column: 'weight'
            },
            {
              title: 'created',
              column: 'created_at',
              sortable: true,
            }
          ],
          upstream: [
            //{
            //  title: '',
            //  column : '',
            //  checkbox : true,
            //  width : 1
            //},
            {
              title: '',
              column : '',
              width : 1
            },
            {
              title: 'name',
              column: 'name',
              searchable: true,
              sortable: true,
              inSearch: true,
              inTitle: true
            },
            //{
            //  title: 'orderlist',
            //  column: 'orderlist',
            //},
            {
              title: 'slots',
              column: 'slots'
            },
            {
              title: 'created',
              column: 'created_at',
              sortable: true,
            },
            {
              title: '',
              column: '',
              width : 1
            },
            {
              title: '',
              column: '',
              width : 1
            },
          ],
          kongnode: [
            {
              title: '',
              column: '',
              width : 1
            },
            {
              title: '',
              column: '',
              width : 1
            },
            {
              title: 'name',
              column: 'name',
              searchable: true,
              sortable: true,
              inSearch: true,
              inTitle: true
            },
            {
              title: 'kong admin url',
              column: 'kong_admin_url',
              searchable: true,
              sortable: true,
              inSearch: true,
              inTitle: true
            },
            {
              title: 'kong version',
              column: 'kong_version'
            },
            {
              title: 'created',
              column: 'createdAt',
              sortable: true,
            },
            //{
            //  title: 'updated',
            //  column: 'updatedAt',
            //  sortable: true,
            //}
          ],
          consumer: [
            {
              checkbox : true,
              width : 1
            },
            {
              title: '',
              width : 1
            },
            {
              title: 'username',
              column: 'username',
              searchable: true,
              sortable: true,
              inSearch: true,
              inTitle: true
            },
            {
              title: 'custom_id',
              column: 'custom_id',
              searchable: true,
              sortable: true,
              inSearch: true,
              inTitle: true
            },
            {
              title: 'created',
              column: 'created_at',
              sortable: true,
            },
            {
              title: '',
              column: '',
              width : 1
            },
            {
              title: '',
              column: '',
              width : 1
            },
          ],
          user: [
            //{
            //  title: '#',
            //  width : 1
            //},
            {
              title: '',
              column: '',
              width : 1
            },
            {
              title: 'username',
              column: 'username',
              searchable: true,
              sortable: true,
              inSearch: true,
              inTitle: true
            },
            {
              title: 'first name',
              column: 'firstName',
              searchable: true,
              sortable: true,
              inSearch: true,
              inTitle: true
            },
            {
              title: 'last name',
              column: 'lastName',
              searchable: true,
              sortable: true,
              inSearch: true,
              inTitle: true
            },
            {
              title: 'created',
              column: 'createdAt',
              sortable: true,
            },
            {
              title: 'updated',
              column: 'updatedAt',
              sortable: true,
            },
            {
              title: '',
              column: '',
              width : 1
            },
          ],
          snapshot: [
            //{
            //  title: 'id',
            //  column: 'id',
            //  searchable: true,
            //  sortable: true,
            //  inSearch: true,
            //  inTitle: true
            //},
            {
              title: 'name',
              column: 'name',
              searchable: true,
              sortable: true,
              inSearch: true,
              inTitle: true
            },
            {
              title: 'kong version',
              column: 'kong_version',
              searchable: true,
              sortable: true,
              inTitle: true
            },
            {
              title: 'created at',
              column: 'createdAt',
              sortable: true,
              inTitle: true
            }
          ],
          userlogin: [
            {
              title: 'IP-address',
              column: 'ip',
              class: 'col-xs-2',
              searchable: true,
              sortable: true,
              inSearch: true,
              inTitle: true
            },
            {
              title: 'Browser',
              column: 'browser',
              class: 'col-xs-2',
              searchable: true,
              sortable: true,
              inSearch: true,
              inTitle: true
            },
            {
              title: 'Operating System',
              column: 'os',
              class: 'col-xs-2',
              searchable: true,
              sortable: true,
              inSearch: true,
              inTitle: true
            },
            {
              title: 'Username',
              column: false,
              class: 'col-xs-2',
              searchable: false,
              sortable: false,
              inSearch: false,
              inTitle: true
            },
            {
              title: 'Login time',
              column: 'createdAt',
              class: 'col-xs-4',
              searchable: false,
              sortable: true,
              inSearch: false,
              inTitle: true
            }
          ]
        };

        return {
          /**
           * Getter method for list default settings.
           *
           * @returns {{
           *            itemCount:            Number,
           *            items:                Array,
           *            itemsPerPage:         Number,
           *            itemsPerPageOptions:  Array,
           *            currentPage:          Number,
           *            where:                {},
           *            loading:              Boolean,
           *            loaded:               Boolean
           *          }}
           */
          getConfig: function getConfig() {
            return {
              itemCount: 0,
              items: [],
              itemsFetchSize: 4294967295,
              itemsPerPage: 50,
              itemsPerPageOptions: [10, 25, 50, 100, 200],
              currentPage: 1,
              where: {},
              loading: true,
              loaded: false
            };
          },

          /**
           * Getter method for lists title items. These are defined in the 'titleItems'
           * variable.
           *
           * @param   {String}    model   Name of the model
           *
           * @returns {Array}
           */
          getTitleItems: function getTitleItems(model) {
            return _.isUndefined(titleItems[model]) ? [] : titleItems[model];
          }
        };
      }
    ])
  ;
}());
