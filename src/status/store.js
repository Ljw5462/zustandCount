// 상태를 통합적으로 관리하는 장소 : 마치 신병훈련소
import create from 'zustand';
import { devtools } from 'zustand/middleware';


// set함수를 통해서만 상태를 변경가능
const useStore = create(
    devtools((set) => ({
        isLogin: false,
        toggleIsLogin: () => set((state) => ({ isLogin: !state.isLogin })),

        count: 1, //state

      	// 함수를 전달하여 상태를 갱신하는 경우
        increase: () => {
            // count 1만큼 증가
            // set method로 상태 변경 가능
            set((state) => ({ count: state.count + 1 }));
        },

      
      	// 객체를 직접 전달하여 상태를 갱신하는 경우
        setCnt: (input) => { //매개변수를 입력받아,
            // 입력받은 input만큼 count 설정
            set({ count: input });
        },

        clearCnt: () => {
            // count 초기화
            set((state) => ({ count: 0 }));
        },
    }))
);

export default useStore;