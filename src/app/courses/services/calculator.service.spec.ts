
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";
describe('CalculatorService',()=>{
    it('Should add two numbers',()=>{
        const logger = new LoggerService();
        spyOn(logger,'log');
        const calculator= new CalculatorService(logger);
       let result= calculator.add(2,5);
        expect(result).toBe(7); 
        expect(logger.log).toHaveBeenCalledTimes(1);
    })
    it('Should subtract two numbers',()=>{
        const calculator= new CalculatorService(new LoggerService());
        let result= calculator.subtract(2,5);
         expect(result).toBe(-3,'Subtraction result is not correct'); 
    })
})