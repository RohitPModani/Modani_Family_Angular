import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FamilyTreeService {
  private familyTree = {
    id: 'MayyaRam',
    name: 'Mayya Ram Chathurbhuj',
    children: [
      {
        id: 'Raghunath-Kids',
        name: 'Raghunath',
        children: [
          {
            id: 'RamGopal-Kids',
            name: 'Ram Gopal',
            children: [
              {
                id: 'Srinivas-Kids',
                name: 'Srinivas',
                children: [
                  {
                    id: 'Srivallabh-Kids',
                    name: 'Srivallabh',
                    children: [
                      {
                        id: 'OmPrakash-Kids',
                        name: 'Om Prakash',
                        children:[
                          {
                            id: 'ShyamSunder-Kids',
                            name: 'ShyamSunder',
                            children:[
                              {
                                id: 'Vidhi',
                                name: 'Vidhi'
                              },
                              {
                                id: 'Vrisha',
                                name: 'Vrisha'
                              },
                              {
                                id: 'Ritesh',
                                name: 'Ritesh'
                              }
                            ]
                          },
                          {
                            id: 'Meena',
                            name: 'Meena'
                          },
                          {
                            id: 'Madhu',
                            name: 'Madhu'
                          },
                          {
                            id: 'Poonam',
                            name: 'Poonam'
                          }
                        ]
                      },
                      {
                        id: 'Jugalkishore',
                        name: 'JugalKishore',
                        children: [
                          {
                            id: 'Preethi',
                            name: 'Preethi'
                          },
                          {
                            id: 'Swathi',
                            name: 'Swathi'
                          },
                          {
                            id: 'Gowtham',
                            name: 'Gowtham'
                          }
                        ]
                      },
                      {
                        id: 'Lakshmikanth',
                        name: 'Lakshmikanth',
                        children: [
                          {
                            id: 'Radhika',
                            name: 'Radhika'
                          },
                          {
                            id: 'Priyanka',
                            name: 'Priyanka'
                          },
                          {
                            id: 'Yashika',
                            name: 'Yashika'
                          }
                        ]
                      },
                      {
                        id: 'GopiKishan',
                        name: 'Gopi Kishan',
                        children: [
                          {
                            id: 'GopiManish',
                            name: 'Manish'
                          },
                          {
                            id: 'Tarun',
                            name: 'Tarun'
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 'LakshmiNarayan',
            name: 'Lakshmi Narayan',
            children: [
              {
                id: 'RamKunwar-Kids',
                name: 'Ram Kunwar',
                children: [
                  {
                    id: 'GovindLal-Kids',
                    name: 'Govind Lal',
                    children: [
                      {
                        id: 'KamalKishore-Kids',
                        name: 'Kamal Kishore',
                        children: [
                          {
                            id: 'Chetan',
                            name: 'Chetan'
                          },
                          {
                            id: 'Tarkesh',
                            name: 'Tarkesh'
                          },
                          {
                            id: 'Karishma',
                            name: 'Karishma'
                          }
                        ]
                      },
                      {
                        id: 'Shrikanth',
                        name: 'Shrikanth'
                      },
                      {
                        id: 'Sunil',
                        name: 'Sunil'
                      },
                      {
                        id: 'Ranjana',
                        name: 'Ranjana'
                      },
                      {
                        id: 'Kiran',
                        name: 'Kiran'
                      }
                    ]
                  },
                  {
                    id: 'RamNarayan-Kids',
                    name: 'Ram Narayan',
                    children: [
                      {
                        id: 'Prakash-Kids',
                        name: 'Prakash Chand',
                        children: [
                          {
                            id: 'Mahesh',
                            name: 'Mahesh'
                          },
                          {
                            id: 'Rohit',
                            name: 'Rohit'
                          },
                          {
                            id: 'Rakhee',
                            name: 'Rakhee'
                          }
                        ]
                      },
                      {
                        id: 'Venugopal-Kids',
                        name: 'Venu Gopal',
                        children: [
                          {
                            id: 'VenuManish',
                            name: 'Manish'
                          },
                          {
                            id: 'Kishan',
                            name: 'Kishan'
                          }
                        ]
                      },
                      {
                        id: 'Roshan-Kids',
                        name: 'Roshan',
                        children: [
                          {
                            id: 'Muskaan',
                            name: 'Muskaan'
                          },
                          {
                            id: 'RoshanVidhi',
                            name: 'Vidhi'
                          }
                        ]
                      },
                      {
                        id: 'Kavitha',
                        name: 'Kavitha'
                      },
                      {
                        id: 'Seema',
                        name: 'Seema'
                      },
                      {
                        id: 'Savitha',
                        name: 'Savitha'
                      },
                      {
                        id: 'Usha',
                        name: 'Usha'
                      }
                    ]
                  }
                ]
              }
            ] // Add children here if any
          },
          {
            id: 'ChunniLal',
            name: 'Chunni Lal',
            children: [
              {
                id: 'RamPrasad',
                name: 'Ram Prasad'
              },
              {
                id: 'RamVilas-Kids',
                name: 'Ram Vilas',
                children: [
                  {
                    id: 'Bharat-Kids',
                    name: 'Bharat',
                    children: [
                      {
                        id: 'BharatRohit-Kids',
                        name: 'Rohit',
                        children: [
                          {
                            id: 'Moulik',
                            name: 'Moulik'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'Pradeep-Kids',
                    name: 'Pradeep',
                    children: [
                      {
                        id: 'Srikanth-Kids',
                        name: 'Srikanth',
                        children: [
                          {
                            id: 'Harshit',
                            name: 'Harshit'
                          },
                          {
                            id: 'Kushi',
                            name: 'Kushi'
                          }
                        ]
                      },
                      {
                        id: 'Sonal',
                        name: 'Sonal'
                      },
                      {
                        id: 'Pooja',
                        name: 'Pooja'
                      }
                    ]
                  },
                  {
                    id: 'Shobha',
                    name: 'Shobha'
                  }
                ]
              },
              {
                id: 'RamiBai',
                name: 'RamiBai'
              },
              {
                id: 'KamalaBai',
                name: 'Kamala Bai'
              }
            ]
          },
          {
            id: 'RamChandra',
            name: 'Ram Chandra',
            children: [
              {
                id: 'MohanLal-Kids',
                name: 'Mohan Lal',
                children: [
                  {
                    id: 'RamKishore-Kids',
                    name: 'Ram Kishore',
                    children: [
                      {
                        id: 'Krishnakanth-Kids',
                        name: 'Krishna Kanth',
                        children: [
                          {
                            id: 'Raghav',
                            name: 'Raghav'
                          },
                          {
                            id: 'Adithi',
                            name: 'Adithi'
                          }
                        ]
                      },
                      {
                        id: 'Archana',
                        name: 'Archana'
                      },
                      {
                        id: 'Aarthi',
                        name: 'Aarthi'
                      }
                    ]
                  },
                  {
                    id: 'Rajkanwar',
                    name: 'Rajkanwar'
                  },
                  {
                    id: 'Mankanwar',
                    name: 'Mankanwar'
                  },
                  {
                    id: 'Padma',
                    name: 'Padma'
                  }
                ]
              },
              {
                id: 'Govardhan-Kids',
                name: 'Govardhan',
                children: [
                  {
                    id: 'Govind-Kids',
                    name: 'Govind',
                    children: [
                      {
                        id: 'Navneet',
                        name: 'Navneet'
                      },
                      {
                        id: 'Anusha',
                        name: 'Anusha'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 'SaddiBai',
            name: 'Saddi Bai'
          }
        ]
      }
    ]
  };

  private findPersonById(personId: string, node: any): any {
    if (node.id === personId) {
      return node;
    }

    if (node.children) {
      for (let child of node.children) {
        const found = this.findPersonById(personId, child);
        if (found) {
          return found;
        }
      }
    }

    return null; // Return null if person not found
  }

  getPersonById(personId: string): any {
    const result = this.findPersonById(personId, this.familyTree);
    return result || null;
  }
}
