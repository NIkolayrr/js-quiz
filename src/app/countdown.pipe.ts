import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'countdown',
})
export class CountdownPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    const minutes: number = Math.floor(value / 60)
    return (
      ('00' + minutes).slice(-2) +
      ':' +
      ('00' + Math.floor(value - minutes * 60)).slice(-2)
    )
  }
}
