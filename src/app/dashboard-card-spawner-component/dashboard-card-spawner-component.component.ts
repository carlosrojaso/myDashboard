import { Component, ComponentFactoryResolver, Injector, Input, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { DashboardCard } from "../dashboard-card";

@Component({
  selector: 'app-dashboard-card-spawner-component',
  template: `<div #spawn></div>`,
  styles: [':host { height: 100%; width: 100%;}']
})
export class DashboardCardSpawnerComponentComponent implements OnInit {
  @ViewChild('spawn', {read: ViewContainerRef}) container;
  constructor(private resolver: ComponentFactoryResolver) { }

  @Input() set card(data: DashboardCard){
    if (!data) return;
    let inputProviders = Object.keys(data.inputs).map((inputName) =>
    {
      return {provide: data.inputs[inputName].key,
              useValue: data.inputs[inputName].value,
              deps: []};
    });

    let injector = Injector.create(inputProviders, this.container.parentInjector);
    let factory = this.resolver.resolveComponentFactory(data.component);
    let component = factory.create(injector);
    this.container.insert(component.hostView);
  }

}
