import TestComponent from "../components/TestComponent.vue";
import { mount } from '@vue/test-utils'

describe('TestComponent', ()=>{
    test('Testing props', ()=>{
        const wrapper = mount(TestComponent, {
            propsData: {
                message: "Hello World"
            }
        })
        expect(wrapper.text()).toContain('Hello World')
    })
})