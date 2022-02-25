import { mount } from "@vue/test-utils";
import { nextTick } from "vue/types/umd";
import Calc from "../components/Calc.vue";

describe('Test Calculator', () => {
    it('test first operand input', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('1')
        expect(wrapper.vm.operand1).toBe(1)
    })

    it('test second operand input', () => {
        const wrapper = mount(Calc)
        const operand2 = wrapper.find('input[name=operand2]')
        // operand2.setValue('1')
        operand2.element.value = "1"
        operand2.trigger('input')
        expect(wrapper.vm.operand2).toBe(1)
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

    it('test sub', ()=>{
        const wrapper = mount(Calc)

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('10')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('5')

        const sumBtn = wrapper.find('button[name="-"]')
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe(5)

    })
})