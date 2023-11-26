
export interface EmptyEventObject {};
export class WidgetEventTarget<T extends Event | CustomEvent | EmptyEventObject, U = any> {

	private _events: { event: string, eventCallback: (e: T, data?: U) => any | void }[] = [];
	_eventEmitMethod = "normal";

	constructor(){
		this._events = [];
		if('afterConstruct' in this && typeof this.afterConstruct == "function"){
			this.afterConstruct();
		}
	}

	on(event: string | string[], eventCallback: (e: T | U, data?: U) => any | void){
		let events: string[] = [];
		if(Array.isArray(event)) events.push(...event);
		else events.push(event);
		events.forEach(event => {
			this._events.push({ event, eventCallback });
			// this.addEventListener(event, eventCallback as EventListenerOrEventListenerObject);
		});
		return this;
	}

	once(event: string | string[], eventCallback: (e: T | U, data?: U) => any | void){
		let events: string[] = [];
		if(Array.isArray(event)) events.push(...event);
		else events.push(event);
		events.forEach(event => {
			let foundEvent = this._events.find(e => (e.event == event && e.eventCallback.toString() == eventCallback.toString()));
			if(!foundEvent) this._events.push({ event, eventCallback });
		});
		return this;
	}

	off(event: string | string[], eventCallback?: (e:  T | U, data?: U) => any | void){
		let events: string[] = [];
		if(Array.isArray(event)) events.push(...event);
		else events.push(event);
		events.forEach(event => {
			if(eventCallback){
				let foundEvent = this._events.find(e => (e.event == event && e.eventCallback == eventCallback));
				if(foundEvent){
					this._events.splice(this._events.indexOf(foundEvent));
				}
			} else {
				this._events.filter(e => e.event == event).forEach(foundEvent => {
					this._events.splice(this._events.indexOf(foundEvent));
				});
			}
		});
		return this;
	}

	emit(event: string | string[], eventData?: U, init?: EventInit, raw?: boolean){
		if(raw == null) raw = this._eventEmitMethod == "raw";
		let data: U | null = eventData || null;
		let events: string[] = [];
		if(Array.isArray(event)) events.push(...event);
		else events.push(event);
		events.forEach(event => {
			this._events.filter(e => e.event == event)
			.forEach(event => {
				let eventInstance = eventData instanceof CustomEvent ? eventData : new CustomEvent(event.event, {
					...init,
					detail: data as U
				});
				event.eventCallback(raw ?  data as any : eventInstance as T, raw ? undefined : data as U);
			});
		});
		return this;
	}

}