const mockGraphqlData = [
  {
    name: 'step1',
    title: 'Step 1',
    sections: [
      {
        name: 'Inventory',
        caption: 'Add Inventory',
        fields: [
          {
            name: 'itemName',
            component: 'input',
            caption: 'Item Name',
            initialValue: '',
            validationRule: '^(?!\\s*$).+'
          },
          {
            name: 'itemDescription',
            component: 'input',
            caption: 'Description',
            initialValue: '',
            validationRule: '^.{50,}$'
          },
          {
            name: 'itemId',
            component: 'input',
            caption: 'Item ID',
            initialValue: ''
          },
          {
            name: 'expiryDate',
            component: 'input',
            type: 'date',
            caption: 'Expiry Date',
            initialValue: ''
          },
          {
            name: 'category',
            component: 'radio',
            caption: 'Category',
            options: [
              { value: 'BRANDA', title: 'BRAND A' },
              { value: 'BRANDB', title: 'BRAND B' }
            ],
            initialValue: 'BRANDA'
          },
          {
            name: 'isImported',
            component: 'radio',
            caption: 'Is item imported?',
            options: [
              { value: 'TRUE', title: 'YES' },
              { value: 'FALSE', title: 'NO' }
            ],
            initialValue: undefined
          },
          {
            name: 'serialNumber',
            type: 'number',
            component: 'input',
            caption: 'Serial Number',
            initialValue: ''
          },
          {
            name: 'itemStatus',
            component: 'select',
            caption: 'Item Status',
            options: [
              { value: 'NEW', title: 'NEW' },
              { value: 'OLD', title: 'OLD' }
            ],
            initialValue: 'NEW'
          },
          {
            name: 'brandDescription',
            component: 'input',
            caption: 'Brand Description'
          }
        ]
      }
    ]
  },
  {
    name: 'step2',
    title: 'Step 2',
    sections: [
      {
        name: 'stockmeasures',
        caption: 'Stock Measures',
        fields: [
          {
            name: 'stockTotalUnit',
            component: 'input',
            caption: 'Total Unit'
          },
          {
            name: 'unitType',
            component: 'input',
            caption: 'Unit type(KG/lt/unit)'
          },
          {
            name: 'importcost',
            component: 'input',
            caption: 'Per unit import cost'
          },
          {
            name: 'exportcost',
            component: 'input',
            caption: 'Per unit export cost'
          },
          {
            name: 'stockVendorName',
            component: 'input',
            caption: 'Vendor Name'
          },
          {
            name: 'vendorcontract',
            component: 'input',
            caption: 'Month/Year of contract',
            type: 'month'
          },
          {
            name: 'vendorType',
            component: 'radio',
            caption: 'Type',
            options: [
              { value: 'LOCAL', title: 'Local' },
              { value: 'INTERNALTIONAL', title: 'International' },
              { value: 'OTHER', title: 'Other' }
            ],
            initialValue: ''
          }
        ]
      }
    ]
  }
]

export default mockGraphqlData
