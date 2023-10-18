import { Table, Column, PrimaryKey, Model, AutoIncrement, DataType, AllowNull, Default } from 'sequelize-typescript';

@Table({ tableName: 'Event', timestamps: false })
class Events extends Model {
  static Events(): { name: String; short_description: String; long_description: String; city: String; state: String; country: String; address: String; start_time: String; end_time: String; } {
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

  @AllowNull(false)
  @Column(DataType.STRING(255))
    start_time!: Date;

  @AllowNull(false)
  @Column(DataType.STRING(255))
    end_time!: Date;

  @AllowNull(true)
  @Column(DataType.STRING(255))
    banner!: string | null;
  
}

export default Events;
