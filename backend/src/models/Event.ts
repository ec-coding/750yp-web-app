import { Table, Column, PrimaryKey, Model, AutoIncrement, DataType, AllowNull, Default } from 'sequelize-typescript';

@Table({ tableName: 'Event', timestamps: false })
class Events extends Model {
  static Events(): { name: String; description: String; date: String; start_time: String; end_time: String; banner: String } {
    throw new Error('Method not implemented.');
  }

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
    event_id!: number;
    
  @AllowNull(true)
  @Column(DataType.STRING(255))
    name!: string | null;

  @AllowNull(true)
  @Column(DataType.STRING(255))
    description!: string | null;
 
  @AllowNull(true)
  @Column(DataType.STRING(255))
    date!: string | null;

  @AllowNull(false)
  @Column(DataType.STRING(255))
    start_time!: String;

  @AllowNull(false)
  @Column(DataType.STRING(255))
    end_time!: String;

  @AllowNull(true)
  @Column(DataType.STRING(255))
    banner!: string | null;
  
}

export default Events;
