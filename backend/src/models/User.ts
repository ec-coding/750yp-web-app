import { Table, Column, PrimaryKey, Model, Unique, AutoIncrement, DataType, AllowNull } from 'sequelize-typescript';

@Table({ tableName: 'User', timestamps: false })
class Users extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @AllowNull(false)
  @Column(DataType.STRING(30))
  declare first_name: string;

  @AllowNull(false)
  @Column(DataType.STRING(30))
  declare last_name: string;
    
  @AllowNull(false)
  @Unique
  @Column(DataType.STRING(30))
  declare email: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  declare profile_icon: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  declare job_title: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  declare company: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  declare dob: Date;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  declare address: string;
}

export default Users;