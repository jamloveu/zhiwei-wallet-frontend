import {FunctionalComponent, Transition, VNode} from 'vue';
import {RouteLocationNormalizedLoaded, RouterView} from 'vue-router';
import s from './welcome.module.scss'
import logo from '../assets/icons/mangosteen.svg'

export const Welcome: FunctionalComponent = () => {
    type TypeSlot = { Component: VNode, route: RouteLocationNormalizedLoaded }
    return (
        <div class={s.wrapper}>
            <header>
                <img src={logo}/>
                <h1>山竹记账</h1>
            </header>
            <main class={s.main}>
                <RouterView name="main">
                    {({Component: X, route: R}: TypeSlot) =>
                        <Transition enterFromClass={s.slide_fade_enter_from}
                                    enterActiveClass={s.slide_fade_enter_active}
                                    leaveToClass={s.slide_fade_leave_to} leaveActiveClass={s.slide_fade_leave_active}>
                            {X}
                        </Transition>
                    }
                </RouterView>
            </main>
            <footer>
                <RouterView name="footer"/>
            </footer>
        </div>
    )
}