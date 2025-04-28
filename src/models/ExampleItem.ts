/**
 * Example model for demonstration purposes only.
 * Safe to delete or extend for your own use case.
 * Not required for production use.
 */
import mongoose, { Schema, model, models } from 'mongoose';

const ExampleItemSchema = new Schema({
  name: { type: String, required: true },
  description: String,
}, { timestamps: true });

// Export as 'ExampleItem' to avoid naming conflicts
export default models.ExampleItem || model('ExampleItem', ExampleItemSchema); 