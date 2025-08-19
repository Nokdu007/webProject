import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toKHR'
})
export class ToKHRPipe implements PipeTransform {

  transform(amount: number, ...args: unknown[]): unknown {
    const res: number = amount * 4100;
    const formattedRes: string = res.toLocaleString();
    return formattedRes;
  }

}
