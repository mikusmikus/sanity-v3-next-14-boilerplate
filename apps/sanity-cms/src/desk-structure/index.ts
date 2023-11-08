import {
  AirplaneTakeoff,
  Eye,
  House,
  SquaresFour,
  UserList,
} from 'phosphor-react';
import { StructureBuilder } from 'sanity/desk';
import Iframe from 'sanity-plugin-iframe-pane';

const deskStructure = (structure: StructureBuilder) =>
  structure
    .list()
    .title('Content')
    .items([
      structure
        .listItem()
        .title('Pages')
        .icon(SquaresFour)
        .child(
          structure
            .list()
            .title('Pages')
            .items([
              structure
                .listItem()
                .title('Home Page')
                .icon(House)
                .child(
                  structure
                    .editor()
                    .id('homePage')
                    .schemaType('homePage')
                    .documentId('homePage')
                    .views([
                      structure.view.form(),
                      structure.view
                        .component(Iframe)
                        .icon(Eye)
                        .options({
                          url: `http://localhost:3000/api/preview`,
                          showDisplayUrl: false,
                          reload: {
                            button: true,
                            revision: 0,
                          },
                        })
                        .title('Preview'),
                    ])
                ),
            ])
        ),
      structure.divider(),
    ]);

export default deskStructure;
