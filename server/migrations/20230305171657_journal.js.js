exports.up = function (knex) {
	return (
		knex.schema
			// .createTable("users", (table) => {
			// 	table.uuid("id").primary();
			// 	table.string("username").notNullable();
			// 	table.string("name").notNullable();
			// 	table.string("password").notNullable();
			// })
			.createTable("entries", function (table) {
				table.uuid("id").primary();
				// table.uuid("user_id");
				table.date("date");
				table.string("Question_1").notNullable();
				table.string("Answer_1").notNullable();
				table.string("Question_2").notNullable();
				table.string("Answer_2").notNullable();
				table.string("Question_3").notNullable();
				table.string("Answer_3").notNullable();
				// table
				// 	.foreign("user_id")
				// 	.references("id")
				// 	.inTable("users")
				// 	.onUpdate("CASCADE")
				// 	.onDelete("CASCADE");
			})
			.createTable("entriesReview", function (table) {
				table.uuid("id").primary();
				// table.uuid("user_id");
				table.date("date");
				table.string("Question_review_1").notNullable();
				table.string("Answer_review_1").notNullable();
				table.string("Question_review_2").notNullable();
				table.string("Answer_review_2").notNullable();
				// table
				// 	.foreign("user_id")
				// 	.references("id")
				// 	.inTable("users")
				// 	.onUpdate("CASCADE")
				// 	.onDelete("CASCADE");
			})
			.createTable("quotes", function (table) {
				table.uuid("id").primary();
				// table.uuid("user_id");
				table.string("text").notNullable();
				// table
				// 	.foreign("user_id")
				// 	.references("id")
				// 	.inTable("users")
				// 	.onUpdate("CASCADE")
				// 	.onDelete("CASCADE");
			})
	);
};

exports.down = function (knex) {
	return knex.schema

		.dropTable("entries")
		.dropTable("entriesReview")
		.dropTable("quotes");
	// .dropTable("users");
};
