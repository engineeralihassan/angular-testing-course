
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";
describe('CalculatorService',()=>{
    let calculator : CalculatorService;
    let loggerSpy:any;
    beforeEach(()=>{
        loggerSpy = jasmine.createSpyObj('LoggerService',['log']);
        calculator = new CalculatorService(loggerSpy);
    })
    it('Should add two numbers',()=>{
       let result= calculator.add(2,5);
        expect(result).toBe(7); 
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    })
    it('Should subtract two numbers',()=>{
        const calculator= new CalculatorService(new LoggerService());
        let result= calculator.subtract(2,5);
         expect(result).toBe(-3,'Subtraction result is not correct'); 
    })
})