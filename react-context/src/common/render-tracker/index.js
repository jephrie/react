export class RenderTracker {
    #count = 0

    get count() {
        return this.#count;
    }

    set count(num) {
        this.#count = num;
    }

    increment() {
        this.#count++;
    }
}