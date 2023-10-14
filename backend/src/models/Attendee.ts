import { Table, Column, PrimaryKey, Model, AutoIncrement, DataType, AllowNull } from 'sequelize-typescript';

@Table({ tableName: 'Attendee', timestamps: false })
class Attendee extends Model {
  static Events(): { attendee_id: number; registered: Date; event_id: number; user_id: number; } {
    throw new Error('Method not implemented.');
}

@PrimaryKey
@AutoIncrement
@Column(DataType.INTEGER)
    declare attendee_id: number;

@Column(DataType.DATE)
    declare registered: Date;

@AllowNull(false)
@Column(DataType.NUMBER)
    declare event_id: number;

@AllowNull(false)
@Column(DataType.NUMBER)
    declare user_id: number;    
}
  
export default Attendee;