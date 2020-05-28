/*
 * A backend boilerplate with example apis
 *
 * Copyright (C) 2020 Adam van der Kruk aka TacB0sS
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {Module} from "@nu-art/ts-common";


type Config = {
	options: string[],
	dispatchNum: string
}

class ExampleModule_Class
	extends Module<Config> {

	getRandomString() {
		return this.config.options[Math.floor(Math.random() * (this.config.options.length))];
	}

}

export const ExampleModule = new ExampleModule_Class();
