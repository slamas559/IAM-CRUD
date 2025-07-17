import Joi from 'joi';

export const createAppointmentSchema = Joi.object({
  date: Joi.date().iso().required().messages({
    'any.required': 'Appointment date is required',
    'date.format': 'Date must be in ISO format'
  }),
  reason: Joi.string().max(200).optional()
});
