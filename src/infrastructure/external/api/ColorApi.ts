import { network } from '../../config/AxiosConfig';

export class ColorApi {
  async getColor(dateStart: Date, dateEnd: Date) {
    const response = await network({
      url: '/history-apply-cc',
      data: {
        dateStart: dateStart.toISOString(),
        dateEnd: dateEnd.toISOString(),
      },
    });
    return response.data;
  }
}
