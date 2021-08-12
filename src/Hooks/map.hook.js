import { useState } from "react";

export default function useMap(initialSet) {
    const [state, setState] = useState(new Map(initialSet))
    const set = (key, value) => {
        setState((prev) => {
            const clone = new Map(prev)
            clone.set(key, value)
            return clone
        })
    }
    const unset = (key) => {
        setState((prev) => {
            const clone = new Map(prev)
            clone.delete(key)
            return clone
        })
    }
    const clear = () => {
        setState((prev) => {
            const clone = new Map(prev)
            clone.clear()
            return clone
        })
    }
    return [state, {set, unset, clear}]
}
