import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Character from '../data';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signing',
  templateUrl: './signing.component.html',
  styleUrls: ['./signing.component.css']
})
export class SigningComponent implements OnInit {
  listName:string='';
  constructor(private toastrService: ToastrService, private router:Router) { }

  ngOnInit(): void {
  }
  onWindowScroll() {
    let element = document.querySelector('.add_bg') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('sticky-header');
    } else {
      element.classList.remove('sticky-header');
    }
  }
                                         

  characters: Character[] = [
    { header_name: 'ID Number', name: 'Mark',id:1000025
,shape:'circle',cells:23,size:34,rows:'5', }, { id:1000025
,shape:'circle',cells:23,size:34,rows:'5',header_name: 'Clump Thickness', name: 'Mark', }, {id:1000025
,shape:'circle',cells:23,size:34,rows:'5', header_name: 'Uniformity of Cell Size', name: 'mdo', }, {id:1000025
,shape:'circle',cells:23,size:34,rows:'5', header_name: 'Single Epithelial Cell Sizee', name: 'Mark', },
    { header_name: 'Uniformity of Cell Shape', name: 'mdo',id:1000025
,shape:'circle',cells:23,size:34,rows:'5', }, { id:1000025
,shape:'circle',cells:23,size:34,rows:'5',header_name: 'Marginal Adhesion', name: 'otto', }, {id:1000025
,shape:'circle',cells:23,size:34,rows:'5', header_name: 'Single Epithelial Cell Sizee', name: 'mdo', },
    { header_name: 'Uniformity of Cell Shape', name: 'mdo', id:1000025
,shape:'circle',cells:23,size:34,rows:'5',}, { id:1000025
,shape:'circle',cells:23,size:34,rows:'5',header_name: 'Single Epithelial Cell Sizee', name: 'otto', }, {id:1000025
,shape:'circle',cells:23,size:34,rows:'5', header_name: 'Single Epithelial Cell Sizee', name: 'Mark', }, {id:1000025
,shape:'circle',cells:23,size:34,rows:'5', header_name: 'Single Epithelial Cell Sizee', name: 'Mark', },
  ];

  listData = [
    {
    listName:'Uniformity of Cell Shape',
  }, {
    listName:'Marginal Adhesion',
  }, {
    listName:'Single Epithelial Cell Size',
  }, {
    listName:'Bare Nuclei',
  }, {
    listName:'Bland Chromatin',
  }, {
    listName:'Normal Nucleoli',
  }, {
    listName:'Mitoses',
  }, {
    listName:'Class (2 for benign 4 malignant)',
  },
  {
    listName:'Class (2 for benign 4 malignant)',
  }, {
    listName:'Class (2 for benign 4 malignant)',
  }, {
    listName:'Class (2 for benign 4 malignant)',
  }, {
    listName:'Class (2 for benign 4 malignant)',
  },
];

success(){
  this.router.navigate(['/credit']);
  
    this.toastrService.success(' Successfully Uploaded', '' , {
       closeButton: true,
        timeOut: 1500, // 15 seconds
        progressBar: true,
        
    });
  }

}
