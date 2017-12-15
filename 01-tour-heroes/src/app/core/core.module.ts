import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "../in-memory-data.service";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { HeroService } from "../hero.service";


export const CORE_SERVICES: any[] = [
  HeroService,
];

@NgModule({
  imports: [
    NoopAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: CORE_SERVICES,
})
export class CoreModule {
  // Guard of reinjecting CoreModule (This must only be loaded once)
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error("CoreModule is already loaded. Import it in the AppModule only");
    }
  }
}
