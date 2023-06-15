-- This script was generated by the ERD tool in pgAdmin 4.
-- Please log an issue at https://redmine.postgresql.org/projects/pgadmin4/issues/new if you find any bugs, including reproduction steps.
BEGIN;


CREATE TABLE IF NOT EXISTS public.form
(
    form_id integer NOT NULL DEFAULT nextval('form_form_id_seq'::regclass),
    type character varying COLLATE pg_catalog."default" NOT NULL,
    "propertiesPropid" integer NOT NULL,
    "geometryGid" integer NOT NULL,
    image character varying COLLATE pg_catalog."default",
    CONSTRAINT "PK_ed84d8e98178872eb4ce8a3ebe7" PRIMARY KEY (form_id)
)
WITH (
    OIDS = FALSE
);

CREATE TABLE IF NOT EXISTS public."formCompaction"
(
    cptid integer NOT NULL DEFAULT nextval('"formCompaction_cptid_seq"'::regclass),
    pressure character varying COLLATE pg_catalog."default" NOT NULL,
    observation character varying COLLATE pg_catalog."default",
    CONSTRAINT "PK_fa05da485c0e875c2dbff1cb717" PRIMARY KEY (cptid)
)
WITH (
    OIDS = FALSE
);

CREATE TABLE IF NOT EXISTS public."formCount"
(
    cntid integer NOT NULL DEFAULT nextval('"formCount_cntid_seq"'::regclass),
    "hasFruit" character varying COLLATE pg_catalog."default" NOT NULL,
    observation character varying COLLATE pg_catalog."default",
    CONSTRAINT "PK_ff8aa193777b66dedd0ba3f79f1" PRIMARY KEY (cntid)
)
WITH (
    OIDS = FALSE
);

CREATE TABLE IF NOT EXISTS public."formDamage"
(
    dmgid integer NOT NULL DEFAULT nextval('"formDamage_dmgid_seq"'::regclass),
    damage character varying COLLATE pg_catalog."default" NOT NULL,
    observation character varying COLLATE pg_catalog."default",
    CONSTRAINT "PK_964c18d9530eaf7e0468f2ec672" PRIMARY KEY (dmgid)
)
WITH (
    OIDS = FALSE
);

CREATE TABLE IF NOT EXISTS public."formDiseases"
(
    disid integer NOT NULL DEFAULT nextval('"formDiseases_disid_seq"'::regclass),
    diseases character varying COLLATE pg_catalog."default",
    level character varying COLLATE pg_catalog."default",
    observation character varying COLLATE pg_catalog."default",
    CONSTRAINT "formDiseases_pkey" PRIMARY KEY (disid)
)
WITH (
    OIDS = FALSE
);

CREATE TABLE IF NOT EXISTS public."formFauna"
(
    fauid integer NOT NULL DEFAULT nextval('"formFauna_fauid_seq"'::regclass),
    fauna character varying COLLATE pg_catalog."default" NOT NULL,
    quantity integer NOT NULL,
    hint character varying COLLATE pg_catalog."default" NOT NULL,
    observation character varying COLLATE pg_catalog."default",
    CONSTRAINT "PK_8a0ab084a23e59d8609726d5f7f" PRIMARY KEY (fauid)
)
WITH (
    OIDS = FALSE
);

CREATE TABLE IF NOT EXISTS public."formGirdling"
(
    girid integer NOT NULL DEFAULT nextval('"formGirdling_girdid_seq"'::regclass),
    administration character varying COLLATE pg_catalog."default",
    area character varying COLLATE pg_catalog."default",
    sector character varying COLLATE pg_catalog."default",
    percent character varying COLLATE pg_catalog."default",
    "stuckGirdling" integer,
    "deepGirdling" integer,
    "heightGirdling" character varying COLLATE pg_catalog."default",
    "markGirdling" character varying COLLATE pg_catalog."default",
    "cantGirdling" character varying COLLATE pg_catalog."default",
    "injectedTree" character varying COLLATE pg_catalog."default",
    observation character varying COLLATE pg_catalog."default",
    CONSTRAINT "PK_girdid" PRIMARY KEY (girid)
)
WITH (
    OIDS = FALSE
);

CREATE TABLE IF NOT EXISTS public."formHumidity"
(
    hmdid integer NOT NULL DEFAULT nextval('"formHumidity_hmdid_seq"'::regclass),
    moisture20 character varying COLLATE pg_catalog."default" NOT NULL,
    moisture40 character varying COLLATE pg_catalog."default" NOT NULL,
    moisture60 character varying COLLATE pg_catalog."default" NOT NULL,
    roots character varying COLLATE pg_catalog."default" NOT NULL,
    observation character varying COLLATE pg_catalog."default",
    CONSTRAINT "PK_85a9a7a3a598893f34022cca7c4" PRIMARY KEY (hmdid)
)
WITH (
    OIDS = FALSE
);

CREATE TABLE IF NOT EXISTS public."formPlague"
(
    plid integer NOT NULL DEFAULT nextval('"formPlague_plid_seq"'::regclass),
    plague character varying COLLATE pg_catalog."default",
    level character varying COLLATE pg_catalog."default",
    population character varying COLLATE pg_catalog."default",
    observation character varying COLLATE pg_catalog."default",
    CONSTRAINT "formPlague_pkey" PRIMARY KEY (plid)
)
WITH (
    OIDS = FALSE
);

CREATE TABLE IF NOT EXISTS public."formSprinkler"
(
    spid integer NOT NULL DEFAULT nextval('"formSprinkler_spid_seq"'::regclass),
    spcode character varying COLLATE pg_catalog."default" NOT NULL,
    defect character varying COLLATE pg_catalog."default" NOT NULL,
    repaired character varying COLLATE pg_catalog."default" NOT NULL,
    observation character varying COLLATE pg_catalog."default",
    CONSTRAINT "PK_9674a3a4314c98e29068930ee49" PRIMARY KEY (spid)
)
WITH (
    OIDS = FALSE
);

CREATE TABLE IF NOT EXISTS public.geometry
(
    gid integer NOT NULL DEFAULT nextval('geometry_gid_seq'::regclass),
    type character varying COLLATE pg_catalog."default" NOT NULL,
    coordinates double precision[] NOT NULL,
    CONSTRAINT "PK_66915e6c248f033c2cb21c14403" PRIMARY KEY (gid)
)
WITH (
    OIDS = FALSE
);

CREATE TABLE IF NOT EXISTS public.migrations
(
    id integer NOT NULL DEFAULT nextval('migrations_id_seq'::regclass),
    "timestamp" bigint NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);

CREATE TABLE IF NOT EXISTS public.properties
(
    propid integer NOT NULL DEFAULT nextval('properties_propid_seq'::regclass),
    "userId" character varying COLLATE pg_catalog."default" NOT NULL,
    "dateTime" timestamp without time zone NOT NULL,
    "formSprinklerSpid" integer,
    "formDamageDmgid" integer,
    "formHumidityHmdid" integer,
    "formCompactionCptid" integer,
    "formFaunaFauid" integer,
    "formCountCntid" integer,
    "formDiseasesDisid" integer,
    "formGirdlingGirid" integer,
    "formPlaguePlid" integer,
    CONSTRAINT "PK_05543bf240999bf89289d52439b" PRIMARY KEY (propid)
)
WITH (
    OIDS = FALSE
);

CREATE TABLE IF NOT EXISTS public.track
(
    id integer NOT NULL DEFAULT nextval('track_id_seq'::regclass),
    type character varying COLLATE pg_catalog."default" NOT NULL,
    "userId" character varying COLLATE pg_catalog."default" NOT NULL,
    "dateTime" timestamp without time zone NOT NULL,
    "geometryGid" integer NOT NULL,
    "timeElapsed" character varying COLLATE pg_catalog."default",
    distance double precision,
    "rawData" json[],
    CONSTRAINT "PK_0631b9bcf521f8fab3a15f2c37e" PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);

CREATE TABLE IF NOT EXISTS public."user"
(
    username character varying COLLATE pg_catalog."default" NOT NULL,
    password character varying COLLATE pg_catalog."default" NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    lastname character varying COLLATE pg_catalog."default" NOT NULL,
    "userRole" character varying COLLATE pg_catalog."default" NOT NULL DEFAULT USER,
    CONSTRAINT "PK_78a916df40e02a9deb1c4b75edb" PRIMARY KEY (username)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE IF EXISTS public.form
    ADD CONSTRAINT "FK_733d64275039a3dc95c590399d5" FOREIGN KEY ("propertiesPropid")
    REFERENCES public.properties (propid) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE CASCADE;


ALTER TABLE IF EXISTS public.form
    ADD CONSTRAINT "FK_973cc3f02e84d4e6a96bff1781b" FOREIGN KEY ("geometryGid")
    REFERENCES public.geometry (gid) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE CASCADE;


ALTER TABLE IF EXISTS public.properties
    ADD CONSTRAINT "FK_30118cf9221ae1cf9b6ace3deaa" FOREIGN KEY ("formHumidityHmdid")
    REFERENCES public."formHumidity" (hmdid) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE CASCADE;


ALTER TABLE IF EXISTS public.properties
    ADD CONSTRAINT "FK_3898e2adbfef49b19903b4c18da" FOREIGN KEY ("formSprinklerSpid")
    REFERENCES public."formSprinkler" (spid) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE CASCADE;


ALTER TABLE IF EXISTS public.properties
    ADD CONSTRAINT "FK_4040ca599d527838e284df11d3c" FOREIGN KEY ("formDamageDmgid")
    REFERENCES public."formDamage" (dmgid) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE CASCADE;


ALTER TABLE IF EXISTS public.properties
    ADD CONSTRAINT "FK_53e742e345099c973c18980f990" FOREIGN KEY ("formCountCntid")
    REFERENCES public."formCount" (cntid) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE CASCADE;


ALTER TABLE IF EXISTS public.properties
    ADD CONSTRAINT "FK_95df2012ba390f601811b6dd36f" FOREIGN KEY ("formCompactionCptid")
    REFERENCES public."formCompaction" (cptid) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE CASCADE;


ALTER TABLE IF EXISTS public.properties
    ADD CONSTRAINT "FK_bb512de7329f5eaae29fa3fc440" FOREIGN KEY ("formFaunaFauid")
    REFERENCES public."formFauna" (fauid) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE CASCADE;


ALTER TABLE IF EXISTS public.properties
    ADD CONSTRAINT "FK_fk3920fk903k90" FOREIGN KEY ("formGirdlingGirid")
    REFERENCES public."formGirdling" (girid) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.properties
    ADD CONSTRAINT "properties_formDiseasesDisid_fkey" FOREIGN KEY ("formDiseasesDisid")
    REFERENCES public."formDiseases" (disid) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE CASCADE
    NOT VALID;


ALTER TABLE IF EXISTS public.properties
    ADD CONSTRAINT "properties_formPlaguePlid_fkey" FOREIGN KEY ("formPlaguePlid")
    REFERENCES public."formPlague" (plid) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE CASCADE
    NOT VALID;


ALTER TABLE IF EXISTS public.track
    ADD CONSTRAINT "FK_bb8dea9b5f4946ef820fc1d1d7c" FOREIGN KEY ("geometryGid")
    REFERENCES public.geometry (gid) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE CASCADE;

END;