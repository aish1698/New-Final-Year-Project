import { HttpClient } from "@angular/common/http";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Profile } from "src/app/models/profile";
import { TeachingService } from "src/app/teaching/teaching.service";
import { ApiService } from "../api.service";
import { CurrentrouteService } from "../currentroute.service";
import { ListService } from "../list/list.service";
import { LoginteacherService } from "../user/loginteacher/loginteacher.service";
@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent implements OnInit {

  form!: FormGroup;
  profile!: Profile; 
  imageData!: string;
  userid: any;
  constructor(private teachingService: TeachingService,private currentroute:CurrentrouteService,private logint:LoginteacherService,    private http:HttpClient,
    private service:ApiService,
    private route:ActivatedRoute,
    private router : Router,
    private ref: ChangeDetectorRef,
    private list:ListService) {}

  ngOnInit(): void {
    this.userid= localStorage.getItem('userid');
    this.form = new FormGroup({
      sem: new FormControl(null),
      subject: new FormControl(null),
      name: new FormControl(null),
      image: new FormControl(null),
      chapter:new FormControl(null),

    });
    this.currentroute.setcurrentroute();
    if(this.logint.isStudent()){
      console.log("student");
    }
  }

  onFileSelect(event:any) {
    console.log(event.target.files);
    const file =event.target.files[0]; 
    
    this.form.patchValue({ image: file });
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg","application/pdf","video/mp4"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    console.log("submit");
    this.teachingService.addProfile(this.form.value.sem,this.form.value.subject, this.form.value.name, this.form.value.image,this.form.value.chapter,this.userid);
    alert(
      "Material uploaded successfully"
    )
    this.form.reset();
    this.imageData =" ";
  }
  
  onupdate(){
    this.router.navigate(['/updatetutorial']);
  }
  
}