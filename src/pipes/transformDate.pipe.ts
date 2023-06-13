import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseDatePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // Descomponemos la cadena en año, mes y día y creamos un objeto Date.
    const [year, month, day] = value.split("-");
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  }
}
