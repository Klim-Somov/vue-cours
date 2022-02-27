import { mount } from "@vue/test-utils"
import Calc from "../components/HelloWorld.vue"

describe('Test Calculator', ()=>{
    it('test first operand input', ()=>{
        const wrapper = mount(Calc)
        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('2')
        // operand2.value = "1"
        operand2.trigger('input')
        expect(wrapper.vm.operand2).toBe(2)
    })
    it('test sum', ()=>{
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('3')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('2')
        
        const sumBtn = wrapper.find('button[name="+"]')
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe(5)
    })
    it('test subtraction', ()=>{
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('3')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('2')
        
        const sumBtn = wrapper.find('button[name="-"]')
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe(1)
    })
    it('test multiply', ()=>{
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('3')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('2')
        
        const sumBtn = wrapper.find('button[name="*"]')
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe(6)
    })
    it('test divide', ()=>{
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('3')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('2')
        
        const sumBtn = wrapper.find('button[name="/"]')
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe(1.5)
    })
    it('test divide rejects', ()=>{
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('0')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('0')
        
        const sumBtn = wrapper.find('button[name="/"]')
        sumBtn.trigger('click')

        expect(wrapper)
    })
    it('test divide rejects', ()=>{
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('0')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('0')
        
        const sumBtn = wrapper.find('button[name="/"]')
        sumBtn.trigger('click')

        expect(wrapper)
    })
    it('test exponent', ()=>{
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('3')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('2')
        
        const sumBtn = wrapper.find('button[name="^"]')
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe(9)
    })
    it('test integerDivision', ()=>{
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('3')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('2')
        
        const sumBtn = wrapper.find('button[name="%"]')
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe(1)
    })   
})