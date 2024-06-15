import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'dateDescription',
})
export class DateDescriptionPipe implements PipeTransform {
  transform(timestamp?: number): string {
    if (timestamp === 0) {
      return 'Present';
    }

    if (!timestamp) {
      return '';
    }

    const date = new Date(timestamp);
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear().toString();
    const monthLabel = month.slice(0, 3).toLocaleUpperCase();
    const yearLabel = `'${year.slice(2, 4)}`;
    const dateLabel = `${monthLabel} ${yearLabel}`;
    return dateLabel;
  }
}
