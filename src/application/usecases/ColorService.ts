import { Color } from "../../domain/models/Color";
import { ColorApi } from "../../infrastructure/external/api/ColorApi";
import { GenericResponse } from "../responses/GenericResponse";

export class ColorService{

    private colorApi: ColorApi;

    constructor(){
        this.colorApi = new ColorApi();
    }

    public async getColors(dateStart: Date, dateEnd: Date) : Promise<GenericResponse<Color[]>>{
        try {
            const startDate = new Date(dateStart); // Tanggal mulai
            const endDate = new Date(dateEnd); // Tanggal akhir
            const result = await this.colorApi.getColor(startDate, endDate);

            const transformedData: Color[] = result.data.map((sourceItem: {
              id: any;
              application_date: Date;
              mtn_id: String;
              customer_name: String;
              phone_number: String;
              status_transaction: String;
              nik: String;
              card_type_name: String;
              automatic_payment_type: String;
              email_estatement: string;
              name_on_card: string;
              home_phone_number: string;
}) => {
                
                const destinationItem: Color = {
                    id: sourceItem.id,
                    application_date: sourceItem.application_date,
                    mtn_id: sourceItem.mtn_id,
                    customer_name: sourceItem.customer_name,
                    phone_number: sourceItem.phone_number,
                    status_transaction: sourceItem.status_transaction,
                    nik: sourceItem.nik,
                    card_type_name: sourceItem.card_type_name,
                    automatic_payment_type: sourceItem.automatic_payment_type,
                    email_estatement: sourceItem.email_estatement,
                    name_on_card: sourceItem.name_on_card,
                    home_phone_number: sourceItem.home_phone_number
                };
                console.log(destinationItem)
                    return destinationItem;
                });

                
            return{
                
                success: true,
                message: 'Success to get colors.',
                data: transformedData
            }
        } catch (error) {
          console.log(error)
            return {
                success: false,
                message: 'Failed to get colors.',
            };
        }
    }

}