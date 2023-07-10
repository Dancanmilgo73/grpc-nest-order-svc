import { Controller, Inject } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderResponse, ORDER_SERVICE_NAME } from './proto/order.pb';
import { CreateOrderRequestDto } from './order.dto';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('order')
export class OrderController {
  @Inject(OrderService)
  private readonly service: OrderService;

  @GrpcMethod(ORDER_SERVICE_NAME, 'CreateOrder')
  private async createOrder(data: CreateOrderRequestDto): Promise<CreateOrderResponse> {
    console.log({data});
    
    
    return this.service.createOrder(data);
  }
}
