import { Component, OnInit, OnChanges, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnChanges {
  user: any;
  id: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public userService: UserService,
    private changeDetectorRef: ChangeDetectorRef
  ) { 
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.userService.getUserDetails(this.id).subscribe(user => this.user = user);
  }

  ngOnChanges() {
    this.changeDetectorRef.detectChanges();
  }

}
