
class RenderTracker {
    #renders = new Map();

    getCount(id) {
        return this.#renders.get(id) || 0;
    }

    setCount(id, num) {
        this.#renders = this.#renders.set(id, num);
    }

    increment(id) {
        const count = this.#renders.get(id) || 0;
        this.#renders.set(id, count + 1);
    }

    getAllCounts() {
        return this.#renders;
    }
}

const tracker = new RenderTracker();

export const getRenderCount = (id) => tracker.getCount(id);
export const setRenderCount = (id, num) => tracker.setCount(id, num);
export const incrementRenderCount = (id) => tracker.increment(id);
export const getAllRenderCounts = () => tracker.getAllCounts();