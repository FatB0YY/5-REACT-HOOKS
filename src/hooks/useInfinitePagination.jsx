import { useState, useEffect, useRef } from 'react'

export default function useInfinitePagination(parentRef, childRef, callback) {
    const observer = useRef()

    useEffect(() => {
        const options ={
            root: parentRef.current,
            rootMargin: '8px',
            threshold: 0
        }
        observer.current = new IntersectionObserver(([target]) => {
            if(target.isIntersecting){
                console.log('эл в зоне видимости');
                callback()
            }
        }, options)
        observer.current.observe(childRef.current)

        return function(){
            observer.current.unobserve(childRef.current)
        }
    }, [callback])
}
