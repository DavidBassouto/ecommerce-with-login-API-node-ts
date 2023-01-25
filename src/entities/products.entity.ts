import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./users.entity";

@Entity("products")
class Product {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 20 })
  productName: string;

  @Column({ type: "float" })
  price: number;

  @Column({ type: "text", width: 250 })
  description?: string;

  @ManyToOne(() => User, (user) => user.products, {
    cascade: true,
    eager: true,
  })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Product;
