const data = "{\"args\":{\"name\":\"Aung\"},\"context\":{},\"info\":{\"fieldName\":\"greeting\",\"fieldNodes\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"greeting\",\"loc\":{\"start\":4,\"end\":12}},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"name\",\"loc\":{\"start\":13,\"end\":17}},\"value\":{\"kind\":\"StringValue\",\"value\":\"Aung\",\"block\":false,\"loc\":{\"start\":19,\"end\":25}},\"loc\":{\"start\":13,\"end\":25}}],\"directives\":[],\"loc\":{\"start\":4,\"end\":26}}],\"returnType\":\"String!\",\"parentType\":\"Query\",\"path\":{\"key\":\"greeting\"},\"schema\":{\"__validationErrors\":[],\"__allowedLegacyNames\":[],\"_queryType\":\"Query\",\"_directives\":[\"@skip\",\"@include\",\"@deprecated\"],\"_typeMap\":{\"Query\":\"Query\",\"String\":\"String\",\"User\":\"User\",\"ID\":\"ID\",\"Int\":\"Int\",\"Post\":\"Post\",\"Boolean\":\"Boolean\",\"__Schema\":\"__Schema\",\"__Type\":\"__Type\",\"__TypeKind\":\"__TypeKind\",\"__Field\":\"__Field\",\"__InputValue\":\"__InputValue\",\"__EnumValue\":\"__EnumValue\",\"__Directive\":\"__Directive\",\"__DirectiveLocation\":\"__DirectiveLocation\"},\"_possibleTypeMap\":{},\"_implementations\":{},\"_extensionsEnabled\":true},\"fragments\":{},\"operation\":{\"kind\":\"OperationDefinition\",\"operation\":\"query\",\"variableDefinitions\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"greeting\",\"loc\":{\"start\":4,\"end\":12}},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"name\",\"loc\":{\"start\":13,\"end\":17}},\"value\":{\"kind\":\"StringValue\",\"value\":\"Aung\",\"block\":false,\"loc\":{\"start\":19,\"end\":25}},\"loc\":{\"start\":13,\"end\":25}}],\"directives\":[],\"loc\":{\"start\":4,\"end\":26}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"me\",\"loc\":{\"start\":29,\"end\":31}},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\",\"loc\":{\"start\":38,\"end\":42}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":38,\"end\":42}}],\"loc\":{\"start\":32,\"end\":46}},\"loc\":{\"start\":29,\"end\":46}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"post\",\"loc\":{\"start\":49,\"end\":53}},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"title\",\"loc\":{\"start\":60,\"end\":65}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":60,\"end\":65}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"published\",\"loc\":{\"start\":70,\"end\":79}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":70,\"end\":79}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"body\",\"loc\":{\"start\":84,\"end\":88}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":84,\"end\":88}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\",\"loc\":{\"start\":93,\"end\":95}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":93,\"end\":95}}],\"loc\":{\"start\":54,\"end\":99}},\"loc\":{\"start\":49,\"end\":99}}],\"loc\":{\"start\":0,\"end\":101}},\"loc\":{\"start\":0,\"end\":101}},\"variableValues\":{}}}";


console.log(JSON.parse(data));