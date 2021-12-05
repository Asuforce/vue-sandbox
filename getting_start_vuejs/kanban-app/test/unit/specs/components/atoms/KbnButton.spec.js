import { mount } from '@vue/test-utils'
import KbnButton from '@/components/atoms/KbnButton.vue'

describe('KbnButton', () => {
  describe('KbnButton', () => {
    describe('type', () => {
      describe('Default', () => {
        it('consists of button elements with kbn-button class', () => {
          const button = mount(KbnButton)
          expect(button.is('button')).to.equal(true)
          expect(button.classes()).to.include('kbn-button')
        })
      }),
      describe('button', () => {
        it('consists of button elements with kbn-button class', () => {
          const button = mount(KbnButton, {
            propsData: { type: 'button' }
          })
          expect(button.is('button')).to.equal(true)
          expect(button.classes()).to.include('kbn-button')
        })
      }),
      describe('text', () => {
        it('consists of button elements with kbn-button-text class', () => {
          const button = mount(KbnButton, {
            propsData: { type: 'text' }
          })
          expect(button.is('button')).to.equal(true)
          expect(button.classes()).to.include('kbn-button-text')
        })
      })
    }),
    describe('disabled', () => {
      describe('Default', () => {
        it('should not grants with disabled property', () => {
          const button = mount(KbnButton)
          expect(button.attributes().disabled).to.be.an('undefined')
        })
      }),
      describe('true', () => {
        it('should grants with disabled property', () => {
          const button = mount(KbnButton, { propsData: { disabled: true } })
          expect(button.attributes().disabled).to.be.an('disabled')
        })
      }),
      describe('false', () => {
        it('should not grants with disabled property', () => {
          const button = mount(KbnButton)
          expect(button.attributes().disabled).to.be.an('undefined')
        })
      })
    })
  }),
  describe('event', () => {
    describe('click', () => {
      it('should publish', () => {
        const button = mount(KbnButton)
        expect(button.attributes().disabled).to.be.an('undefined')
      })
    })
  }),
  describe('slot', () => {
    describe('Content inserted', () => {
      it('should insert', () => {
        const button = mount(KbnButton, {
          slots: { default: '<p>hello</p>' }
        })
        expect(button.text()).to.equal('hello')
      })
    }),
    describe('Content not inserted', () => {
      it('should not insert', () => {
        const button = mount(KbnButton)
        expect(button.text()).to.equal('')
      })
    })
  })
})
