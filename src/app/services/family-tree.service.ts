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
                name: 'Srinivas - Kaveri Bai (Innani)',
                children: [
                  {
                    id: 'Srivallabh-Kids',
                    name: 'Srivallabh - Kamala Bai (Bajaj)',
                    children: [
                      {
                        id: 'OmPrakash-Kids',
                        name: 'Om Prakash - Premlatha (Kankani)',
                        children:[
                          {
                            id: 'ShyamSunder-Kids',
                            name: 'Shyam Sunder - Poonam (Saboo)',
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
                            name: 'Meena - Pavan Navander'
                          },
                          {
                            id: 'Madhu',
                            name: 'Madhu - Deepak Kasat'
                          },
                          {
                            id: 'Poonam',
                            name: 'Poonam - Aditya Narania'
                          }
                        ]
                      },
                      {
                        id: 'Jugalkishore',
                        name: 'JugalKishore - Jyothi (Somani)',
                        children: [
                          {
                            id: 'Preethi',
                            name: 'Preethi - Deepak Harkut'
                          },
                          {
                            id: 'Swathi',
                            name: 'Swathi - Mahesh Jaju'
                          },
                          {
                            id: 'Gowtham',
                            name: 'Gowtham'
                          }
                        ]
                      },
                      {
                        id: 'Lakshmikanth',
                        name: 'Lakshmikanth - Sunitha (Laturia)',
                        children: [
                          {
                            id: 'Radhika',
                            name: 'Radhika - Ranganath Sarda'
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
                        name: 'Gopi Kishan - Geetha (Navander)',
                        children: [
                          {
                            id: 'GopiManish',
                            name: 'Manish - Namratha (Jhawar)'
                          },
                          {
                            id: 'Tarun',
                            name: 'Tarun - Prerna (Bang)'
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
                name: 'Ram Kunwar - Narayani Bai (Baldawa)',
                children: [
                  {
                    id: 'GovindLal-Kids',
                    name: 'Govind Lal - Geetha (Bajaj)',
                    children: [
                      {
                        id: 'KamalKishore-Kids',
                        name: 'Kamal Kishore - Leela (Bang)',
                        children: [
                          {
                            id: 'Chetan',
                            name: 'Chetan - Preethi'
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
                        name: 'Ranjana - Om Prakash Attal'
                      },
                      {
                        id: 'Kiran',
                        name: 'Kiran - Damodar Kalani'
                      }
                    ]
                  },
                  {
                    id: 'RamNarayan-Kids',
                    name: 'Ram Narayan - Shanta Bai (Palod)',
                    children: [
                      {
                        id: 'Prakash-Kids',
                        name: 'Prakash Chand - Srikantha (Kalantri)',
                        children: [
                          {
                            id: 'Mahesh',
                            name: 'Mahesh - Vanadana (Lahoti)'
                          },
                          {
                            id: 'Rohit',
                            name: 'Rohit'
                          },
                          {
                            id: 'Rakhee',
                            name: 'Rakhee - Ambesh Dhoot'
                          }
                        ]
                      },
                      {
                        id: 'Venugopal-Kids',
                        name: 'Venu Gopal - Rekha (Mundada)',
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
                        name: 'Roshan - Jyothi (Rathi)',
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
                        name: 'Kavitha - Shyam Sunder Bhattad'
                      },
                      {
                        id: 'Seema',
                        name: 'Seema - Navin Jaju'
                      },
                      {
                        id: 'Savitha',
                        name: 'Savitha - Susil Lahoti'
                      },
                      {
                        id: 'Usha',
                        name: 'Usha - Pawan Kabra'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 'ChunniLal',
            name: 'Chunni Lal',
            children: [
              {
                id: 'RamPrasad',
                name: 'Ram Prasad - Kesar Bai (Toshniwal)'
              },
              {
                id: 'RamVilas-Kids',
                name: 'Ram Vilas - Shanta (Rathi)',
                children: [
                  {
                    id: 'Bharat-Kids',
                    name: 'Bharat - Madhu (Mundada)',
                    children: [
                      {
                        id: 'BharatRohit-Kids',
                        name: 'Rohit - Leena',
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
                    name: 'Pradeep - Uma (Mundada)',
                    children: [
                      {
                        id: 'Srikanth-Kids',
                        name: 'Srikanth - Sneha',
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
                        name: 'Sonal - Neeraj Tapadia'
                      },
                      {
                        id: 'Pooja',
                        name: 'Pooja - Mayank Malpani'
                      }
                    ]
                  },
                  {
                    id: 'Shobha',
                    name: 'Shobha - Srinarayan Chandak'
                  }
                ]
              },
              {
                id: 'RamiBai',
                name: 'Rami Bai - Pannalal Rathi'
              },
              {
                id: 'KamalaBai',
                name: 'Kamala Bai - Udayram Bharadiya'
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
                    name: 'Ram Kishore - Shakuntala (Bajaj)',
                    children: [
                      {
                        id: 'Krishnakanth-Kids',
                        name: 'Krishnakanth - Archana (Mantri)',
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
                        name: 'Archana - Shankarlal Attal'
                      },
                      {
                        id: 'Aarthi',
                        name: 'Aarthi - Anand Sanghi Jaju'
                      }
                    ]
                  },
                  {
                    id: 'Rajkanwar',
                    name: 'Rajkanwar - Jawarilal Gilda'
                  },
                  {
                    id: 'Mankanwar',
                    name: 'Mankanwar - Nanda Kishore Bhattad'
                  },
                  {
                    id: 'Padma',
                    name: 'Padma - Jagadeesh Bhattad'
                  }
                ]
              },
              {
                id: 'Govardhan-Kids',
                name: 'Govardhan - Shyama Bai',
                children: [
                  {
                    id: 'Govind-Kids',
                    name: 'Govind - Kavitha (Malani)',
                    children: [
                      {
                        id: 'Navneet',
                        name: 'Navneet'
                      },
                      {
                        id: 'Anusha',
                        name: 'Anusha - Rohit Ladda'
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
