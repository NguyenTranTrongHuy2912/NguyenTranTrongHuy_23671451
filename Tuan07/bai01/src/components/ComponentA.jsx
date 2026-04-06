import React, { use } from 'react'
import CounterAtom from '../atom/CounterAtom';
import { useRecoilValue } from 'recoil';

function ComponentA() {
    var value = useRecoilValue(CounterAtom);

    return (
        <div>
            Gia tri cua value trong ComponentA: {value}
        </div>
    )
}

export default ComponentA
