import{
    validateEmptyAndEmail,
    validateEmptyAndLenght3
} from './validators'

describe('Validators utils',()=> {
    it('should give an error with empty', ()=>{
        expect(validateEmptyAndLenght3()).toBe('*Este campo é obrigatório')
    })
})