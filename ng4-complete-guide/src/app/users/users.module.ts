import { NgModule } from "@angular/core";
import { UserRoutingModule } from "./users-routing.module";
import { UserComponent } from "./users.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[UserComponent],
    imports: [UserRoutingModule, CommonModule]
})
export class UserModule{}