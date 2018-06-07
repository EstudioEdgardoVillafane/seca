import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeSpace'
})
export class ChangeSpacePipe implements PipeTransform {
  replaceLineForSpace;

  transform(VarJson: any): any {
    this.replaceLineForSpace = VarJson.replace(/-/g,' ');
    return this.replaceLineForSpace;
  }

}
