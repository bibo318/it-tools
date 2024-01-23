import { NIL as nilUuid } from 'uuid';

export const validUuidRules = [
{
message: '$t(', uuid, : .invalid_uuid_message, ')': ,
validator: (value: string) => {
if (value === nilUuid) {
return true;
}

return Boolean(value.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/));
},
},
];
